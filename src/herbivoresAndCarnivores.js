'use strict';

class Animal {
   static alive = [];

   constructor(name, health = 100) {
     this.name = name;
     this.health = health;
     Animal.alive.push(this);
   };
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivoreVictim) {
    if (herbivoreVictim instanceof Herbivore && !herbivoreVictim.hidden) {
      herbivoreVictim.health -= 50;
    }

    if (herbivoreVictim.health <= 0) {
      Animal.alive = Animal.alive.filter(
        (animal) => animal !== herbivoreVictim
      );
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

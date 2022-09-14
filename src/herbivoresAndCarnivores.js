'use strict';

class Animal {
   static alive = [];

   constructor(name, health) {
     this.health = 100;
     this.name = name;

     Animal.alive.push(this);
   }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  };

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore === true && animal.hidden === false) {
      animal.health -= 50;
    }
    Animal.alive = Animal.alive.filter((herbivore) => herbivore.health > 0); ;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

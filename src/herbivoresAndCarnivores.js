'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
  }

  applyDamage(healthPoints) {
    this.health -= healthPoints;

    if (this.health < 0) {
      Animal.removeDead();
    }
  }
}

Animal.alive = [];
Animal.removeDead = () => {
  Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
};

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (
      animal instanceof Herbivore
      && !animal.hidden
    ) {
      animal.applyDamage(50);
    }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

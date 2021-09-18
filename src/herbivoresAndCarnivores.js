/* eslint-disable no-console */
'use strict';

class Animal {
  static alive = [];
  static deadAnimal(animalName) {
    Animal.alive = Animal.alive.filter(el => el.name !== animalName);
  }
  health = 100;

  constructor() {
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor() {
    super();

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animalBite) {
    if (!animalBite.hidden && animalBite instanceof Herbivore) {
      animalBite.health -= 50;

      if (animalBite.health === 0) {
        Animal.deadAnimal(animalBite.name);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

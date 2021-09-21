/* eslint-disable no-console */
'use strict';

class Animal {
  static alive = [];
  static deadAnimal(animalName) {
    Animal.alive = Animal.alive.filter(el => el.health > 0);
  }

  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);

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

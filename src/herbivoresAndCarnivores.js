'use strict';

class Animal {
  static alive = [];

  constructor() {
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animalName) {
    if (animalName instanceof Herbivore && animalName.hidden !== true) {
      animalName.health = animalName.health - 50;
    }

    if (animalName.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

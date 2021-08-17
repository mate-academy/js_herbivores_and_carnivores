'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  bite(animalBittenOff) {
    if (animalBittenOff.hidden === false) {
      animalBittenOff.health = animalBittenOff.health - 50;
    }

    Animal.alive = Animal.alive.map(animal => animal.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

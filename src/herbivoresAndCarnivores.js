'use strict';

class Animal {
  static addAnimal(animal) {
    Animal.alive.push(animal);
  }

  static deleteAnimal(delAnimal) {
    Animal.alive = Animal.alive.filter(animal => animal !== delAnimal);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.addAnimal(this);
  }
}

Animal.alive = [];

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
  bite(huntedAnimal) {
    if (huntedAnimal.hidden === false && huntedAnimal instanceof Herbivore) {
      huntedAnimal.health -= 50;
    }

    if (huntedAnimal.health === 0) {
      Animal.deleteAnimal(huntedAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

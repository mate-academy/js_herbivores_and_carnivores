'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.createAnimal(this);
  }

  static alive = [];

  static createAnimal(animal) {
    this.alive.push(animal);
  }

  static removeAnimal(deadAnimal) {
    Animal.alive = Animal.alive.filter(animal => animal !== deadAnimal);
  }
}

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    const canBite = animal instanceof Herbivore && !animal.hidden;

    if (canBite) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.removeAnimal(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  static addAnimale(newAnimal) {
    Animal.alive.push(newAnimal);
  }

  static removeAnimal(deadAnimal) {
    Animal.alive = Animal.alive.filter(animal => animal !== deadAnimal);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.addAnimale(this);
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
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.removeAnimal(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

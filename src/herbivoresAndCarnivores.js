'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.create(this);
  }

  static create(animal) {
    Animal.alive.push(animal);
  }

  static clear() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
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
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    Animal.clear();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

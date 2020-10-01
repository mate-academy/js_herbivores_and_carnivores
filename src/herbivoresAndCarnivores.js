'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.newAnimal(this);
  }
  static newAnimal(animal) {
    Animal.alive.push(animal);
  }
  static ripAnimal(some) {
    Animal.alive = this.alive.filter(animal => animal !== some);
  }
}
Animal.alive = [];

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
  bite(some) {
    if (some.hidden !== undefined && some.hidden !== true) {
      some.health -= 50;
    }

    if (some.health === 0) {
      Animal.ripAnimal(some);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.aliveAnimals.push(this);
  }

  static get alive() {
    return Animal.aliveAnimals.filter(animal => animal.health > 0);
  }
}

Animal.aliveAnimals = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    if (this.hidden) {
      this.hidden = false;

      return;
    }

    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

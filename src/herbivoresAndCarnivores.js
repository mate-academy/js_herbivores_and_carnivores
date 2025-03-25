'use strict';

class Animal {
  static #all = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.#all.push(this);
  }

  static get alive() {
    return this.#all.filter((animal) => animal.health > 0);
  }

  static remove(animal) {
    this.#all = this.#all.filter((a) => a !== animal);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden !== true) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.remove(animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

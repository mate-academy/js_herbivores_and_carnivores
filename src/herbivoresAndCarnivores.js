'use strict';

class Animal {
  static alive = [];
  #health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  get isAlive() {
    return this.health > 0;
  }

  get health() {
    return this.#health;
  }

  set health(value) {
    this.#health = value;

    if (!this.isAlive) {
      const index = Animal.alive.findIndex(animal => animal === this);

      if (~index) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Carnivore) {
      return;
    }

    if (animal.hidden) {
      return;
    }

    animal.health -= 50;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  static #alive = [];

  static get alive() {
    return [...Animal.#alive];
  }

  #health;
  #name;

  constructor(name, health = 100) {
    this.#name = name;

    this.#health = Math.max(0, health);

    if (this.#health > 0) {
      Animal.#alive.push(this);
    }
  }

  get name() {
    return this.#name;
  }

  get health() {
    return this.#health;
  }

  set health(value) {
    this.#health = Math.max(0, value);

    if (this.#health === 0) {
      Animal.#alive = Animal.#alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  #hidden = false;

  get hidden() {
    return this.#hidden;
  }

  set hidden(state) {
    this.#hidden = state;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target.hidden || !(target instanceof Herbivore)) {
      return false;
    }

    target.health -= 50;

    return true;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

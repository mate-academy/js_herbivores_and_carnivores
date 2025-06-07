'use strict';

class Animal {
  static alive = [];
  #health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  get health() {
    return this.#health;
  }

  set health(value) {
    this.#health = value;

    if (this.#health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

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
  bite(prey) {
    const isHerbivore = prey instanceof Herbivore;

    if (isHerbivore && !prey.hidden) {
      prey.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

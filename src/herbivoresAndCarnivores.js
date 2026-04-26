'use strict';

class Animal {
  static alive = [];
  _health = 100;

  constructor(name) {
    this.name = name;

    Animal.alive.push(this);
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;

    if (value <= 0) {
      this.die();
    }
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (
      Animal.alive.includes(animal) &&
      animal instanceof Herbivore &&
      !animal.hidden
    ) {
      animal.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

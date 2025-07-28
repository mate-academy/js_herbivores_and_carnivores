'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this._health = 100;

    Animal.alive.push(this);
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;

    if (this._health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(targetHerbivore) {
    if (
      targetHerbivore instanceof Herbivore &&
      targetHerbivore.hidden !== true
    ) {
      targetHerbivore.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

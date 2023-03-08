'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  set health(value) {
    this._health = (value >= 0) ? value : 0;

    if (!this.health) {
      this.die();
    }
  }

  get health() {
    return this._health;
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
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
  bite(prey) {
    if (
      prey instanceof Herbivore
      && !prey.hidden
    ) {
      prey.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

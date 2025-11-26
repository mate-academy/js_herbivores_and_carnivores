'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this._health = 0;
    this.hidden = false;

    this.health = health;

    Animal.alive.push(this);
  }

  set health(value) {
    this._health = value;

    if (value <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }

  get health() {
    return this._health;
  }
}

class Herbivore extends Animal {}

Herbivore.prototype.hide = function () {
  this.hidden = true;
};

class Carnivore extends Animal {}

Carnivore.prototype.bite = function (animal) {
  if (animal instanceof Herbivore && !animal.hidden) {
    animal.health -= 50;
  }
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

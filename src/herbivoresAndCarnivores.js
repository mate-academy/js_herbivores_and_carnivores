'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this._health = health;
    Animal.alive.push(this);
  }

  get health() {
    return this._health;
  }
  set health(newValue) {
    this._health = newValue;

    if (this._health <= 0) {
      Animal.alive = Animal.alive.filter((beast) => beast !== this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Carnivore || animal.hidden === true) {
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

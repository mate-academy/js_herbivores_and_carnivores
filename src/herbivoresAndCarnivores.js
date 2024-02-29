'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this._health = health; // Private property for health
    Animal.alive.push(this);
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;

    if (this._health <= 0) {
      Animal.removeDeadAnimals();
    }
  }

  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter(beast => beast.health > 0);
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
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

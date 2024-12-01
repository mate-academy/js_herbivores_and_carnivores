'use strict';

const DEFAULT_HEALTH = 100;
const DAMAGE_AMOUNT = 50;

class Animal {
  static alive = [];
  constructor(name, health = DEFAULT_HEALTH) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }

  removeDead(dead) {
    if (dead.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  canBeBitten() {
    return this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal instanceof Carnivore) && !animal.canBeBitten()) {
      animal.health -= DAMAGE_AMOUNT;
      animal.removeDead(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

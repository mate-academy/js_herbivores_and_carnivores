'use strict';

const defaultHealth = 100;
const decreaseAfterBite = 50;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = defaultHealth;
    this.hidden = false;

    Animal.alive.push(this);
  }

  static alive = [];

  isAlive() {
    return this.health > 0;
  }

  decreaseHealth(amount) {
    this.health -= amount;

    if (!this.isAlive()) {
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
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.decreaseHealth(decreaseAfterBite);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

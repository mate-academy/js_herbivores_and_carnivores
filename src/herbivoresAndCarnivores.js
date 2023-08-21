'use strict';

const TOTAL_HEALTH = 100;
const HEALTH_A_BIT = 50;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = TOTAL_HEALTH;
    Animal.alive.push(this);
  }
}

// ? why i cannot use static in a class
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
  bite(target) {
    const isCarnivore = target instanceof Carnivore;
    const isHidden = target.hidden;

    if (isCarnivore || isHidden) {
      return;
    }

    target.health -= HEALTH_A_BIT;

    if (target.health > 0) {
      return;
    }

    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

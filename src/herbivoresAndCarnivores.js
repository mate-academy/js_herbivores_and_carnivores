'use strict';

class Animal {
  static DEFAULT_HEALTH = 100;
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = Animal.DEFAULT_HEALTH;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  bitten() {
    this.health -= 50;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim.hidden || victim instanceof Carnivore) {
      return undefined;
    }

    victim.bitten();

    if (victim.health === 0) {
      Animal.alive = Animal.alive.filter((item) => item.health !== 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

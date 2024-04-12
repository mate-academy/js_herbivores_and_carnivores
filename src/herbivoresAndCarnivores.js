'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  getAnimalHealth(name) {
    return Animal.alive.find((item) => item.name === name).health;
  }

  getBited() {
    Animal.alive = Animal.alive.filter((item) => item.health !== 0);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;

    Animal.alive.push(this);
  }

  bitten() {
    this.health -= 50;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  bite(victim) {
    if (victim.hidden || victim instanceof Carnivore) {
      return undefined;
    }

    victim.bitten();
    this.getBited();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

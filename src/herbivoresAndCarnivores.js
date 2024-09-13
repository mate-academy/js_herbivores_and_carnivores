'use strict';

const DEFAULT_HEALTH = 100;
const DEFAULT_DEMAGE = 50;

class Animal {
  static alive = [];

  constructor(name, health = DEFAULT_HEALTH) {
    this.name = name;
    this.health = DEFAULT_HEALTH;
    Animal.alive.push(this);
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

  demage(amount = DEFAULT_DEMAGE) {
    this.health -= amount;

    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((item) => item.health > 0);
    }
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.demage(DEFAULT_DEMAGE);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

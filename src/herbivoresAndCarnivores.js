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

  demage(amout = DEFAULT_DEMAGE) {
    this.health -= amout;

    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((item) => item !== this);
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
  bite(victim) {
    if (victim instanceof Carnivore || victim.hidden) {
      return;
    }

    victim.demage(DEFAULT_DEMAGE);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

const DEFAULT_HEALTH = 100;
const LOWERED_HEALTH = 50;

class Animal {
  static alive = [];

  constructor(name) {
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

  receiveBite() {
    if (!this.hidden) {
      this.health -= LOWERED_HEALTH;

      if (this.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
      }
    }
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore) {
      victim.receiveBite();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

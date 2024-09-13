'use strict';

class Animal {
  static DEFAULT_HEALTH = 100;
  static DAMAGE = 50;
  static alive = [];

  constructor(name, health = Animal.DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (!victim.hidden && !(victim instanceof Carnivore)) {
      victim.health -= Animal.DAMAGE;
    }

    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

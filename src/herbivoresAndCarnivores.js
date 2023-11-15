'use strict';

const BASE_HEALTH = 100;
const BASE_DAMAGE = 50;

class Animal {
  static alive = [];
  constructor(name, health = BASE_HEALTH) {
    this.health = health;
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(victim) {
    const isVictim = !victim.hidden && victim instanceof Herbivore;

    if (isVictim) {
      victim.health -= BASE_DAMAGE;
    }
    Animal.alive = Animal.alive.filter(stillAlive => stillAlive.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

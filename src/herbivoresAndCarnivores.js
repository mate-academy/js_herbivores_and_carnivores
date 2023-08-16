'use strict';

const DEFOLT_HEALTH = 100;
const DAMAGE_OF_BIT = 50;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = DEFOLT_HEALTH;
    Animal.alive.push(this);
  }
}

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
  bite(victim) {
    if (!victim.hidden && victim.hasOwnProperty('hidden')) {
      victim.health -= DAMAGE_OF_BIT;
    }

    if (victim.health === 0) {
      Animal.alive = Animal.alive.filter(pet => pet.health !== 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

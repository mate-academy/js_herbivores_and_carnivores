'use strict';

const FULL_HEALTH = 100;
const HEALTH_TAKEN_BY_BITE = 50;
const DEAD_ANIMAL_HEALTH = 0;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = FULL_HEALTH;
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
    this.hidden = (!this.hidden);
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= HEALTH_TAKEN_BY_BITE;
    }

    if (victim.health === DEAD_ANIMAL_HEALTH) {
      const index = Animal.alive.indexOf(victim);

      delete Animal.alive[index];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

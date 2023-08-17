'use strict';

const MAX_HEALTH = 100;
const HEALTH_DAMAGE = 50;
const DEAD = 0;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = MAX_HEALTH;

    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter(animal => animal.health > DEAD);
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
    if (!victim.hidden && victim instanceof Herbivore) {
      victim.health -= HEALTH_DAMAGE;
    }

    if (victim.health <= DEAD) {
      victim.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

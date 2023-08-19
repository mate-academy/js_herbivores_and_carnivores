'use strict';

const DEFAULT_HEALTH = 100;
const DAMAGE = 50;
const RIP = 0;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = DEFAULT_HEALTH;

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
  bite(target) {
    if (!target.hidden && target instanceof Herbivore) {
      target.health -= DAMAGE;
    }

    if (target.health === RIP) {
      Animal.alive = Animal.alive.filter(animal => animal.health > RIP);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

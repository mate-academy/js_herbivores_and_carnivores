'use strict';

const MIN_HEALTH = 0;
const MAX_HEALTH = 100;
const DAMAGE_HEALTH = 50;

class Animal {
  constructor(name) {
    this.health = MAX_HEALTH;
    this.name = name;
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
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= DAMAGE_HEALTH;
    }

    if (target.health === MIN_HEALTH) {
      Animal.alive = Animal.alive.filter(animal => animal !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

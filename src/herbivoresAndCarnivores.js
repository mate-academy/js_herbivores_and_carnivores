'use strict';

const DEFAULT_HEALTH = 100;
const DAMAGE_VALUE = 50;

class Animal {
  static alive = [];
  constructor(name, health = DEFAULT_HEALTH) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  removeDead() {
    Animal.alive = Animal.alive.filter((item) => item.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(health, name) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= DAMAGE_VALUE;
    }

    this.removeDead();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

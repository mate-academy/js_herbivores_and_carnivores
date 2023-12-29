'use strict';

const HEALTH = 100;
const DAMAGE = 50;
const DEAD = 0;

class Animal {
  static alive = [];

  constructor(name, health = HEALTH) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = HEALTH) {
    super(name, health);
  }

  bite(victim) {
    if (victim instanceof Herbivore
      && !victim.hidden) {
      victim.health -= DAMAGE;

      if (victim.health === DEAD) {
        Animal.alive = Animal.alive.filter(animal => animal !== victim);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

const DEFAULT_HEALTH = 100;
const BITE_DAMAGE = 50;

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
  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden !== true) {
      victim.health -= BITE_DAMAGE;
    }

    if (victim.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal.name !== victim.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

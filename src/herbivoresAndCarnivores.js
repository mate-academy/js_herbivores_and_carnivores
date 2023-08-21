'use strict';

const FULL_HEALTH = 100;
const BITE_DAMAGE = 50;
const DEATH_VALUE = 0;

class Animal {
  constructor(name) {
    this.health = FULL_HEALTH;
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
  bite(victim) {
    if (!(victim instanceof Carnivore) && !victim.hidden) {
      victim.health -= BITE_DAMAGE;
    }

    if (victim.health <= DEATH_VALUE) {
      Animal.alive = Animal.alive.filter(animal => animal.health > DEATH_VALUE);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

const DEFAULT_HEALTH = 100;
const BITE_DAMAGE = 50;
const DEATH_VALUE = 0;

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
      target.health -= BITE_DAMAGE;
    }

    if (target.health <= DEATH_VALUE) {
      Animal.alive = Animal.alive.filter(animal => animal.health > DEATH_VALUE);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

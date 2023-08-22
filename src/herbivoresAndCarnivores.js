'use strict';

const HEALTH_FULL = 100;
const BITE_DAMAGE = 50;
const HEALTH_OF_DEAD_ANIMAL = 0;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = HEALTH_FULL;

    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
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

    if (target.health <= HEALTH_OF_DEAD_ANIMAL) {
      target.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

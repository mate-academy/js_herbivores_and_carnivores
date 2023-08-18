'use strict';

const HEALTH = 100;
const BITE_POWER = 50;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = HEALTH;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter(animal => animal !== this);
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
  constructor(name) {
    super(name);
    this.bitePower = BITE_POWER;
  }

  bite(victim) {
    if (!victim.hidden && victim instanceof Herbivore) {
      victim.health -= this.bitePower;
    }

    if (victim.health <= 0) {
      victim.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

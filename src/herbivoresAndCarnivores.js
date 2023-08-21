'use strict';

const FULL_HEALTH = 100;
const BITE_DAMAGE = 50;

class Animal {
  static alive = [];

  constructor(name, health = FULL_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter(animal => animal !== this);
  }
}

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
  constructor(name, health = FULL_HEALTH) {
    super(name, health);
  }

  bite(target) {
    if (!(target instanceof Herbivore) || target.hidden) {
      return;
    }

    target.health -= BITE_DAMAGE;

    if (target.health <= 0) {
      target.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

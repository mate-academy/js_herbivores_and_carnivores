'use strict';

const MAX_HEALTH = 100;
const BITE_DAMAGE = 50;
const DEAD_VALUE = 0;

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = MAX_HEALTH;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }

  checkHealth() {
    if (this.health <= DEAD_VALUE) {
      this.die();
    }
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
  bite(target) {
    if (
      target instanceof Herbivore &&
      !target.hidden &&
      !(target instanceof Carnivore)
    ) {
      target.health -= BITE_DAMAGE;
      target.checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

const MAX_HEALTHS = 100;
const BITE_DAMAGE = 50;

class Animal {
  static alive = [];

  constructor(name) {
    this.health = MAX_HEALTHS;
    this.name = name;
    Animal.alive.push(this);
  }

  static removeDead() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(health, name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= BITE_DAMAGE;

      Animal.removeDead();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

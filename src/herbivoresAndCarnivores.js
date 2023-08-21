'use strict';

const MAX_HEALTH = 100;
const DEATH_HEALTH = 0;
const BITE_DAMAGE = 50;

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = MAX_HEALTH;
    Animal.alive.push(this);
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
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= BITE_DAMAGE;
    }

    if (victim.health <= DEATH_HEALTH) {
      Animal.alive = Animal.alive
        .filter(animal => animal.health > DEATH_HEALTH);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

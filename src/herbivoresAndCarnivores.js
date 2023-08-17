'use strict';

const DEFAULT_HEALTH_VALUE = 100;
const BITE_DAMAGE_VALUE = 50;

class Animal {
  constructor(name, health = DEFAULT_HEALTH_VALUE) {
    this.name = name;
    this.health = health;
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
    if (victim.hidden === true || !(victim instanceof Herbivore)) {
      return;
    }

    victim.health -= BITE_DAMAGE_VALUE;

    if (victim.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

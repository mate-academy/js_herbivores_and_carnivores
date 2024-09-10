'use strict';

const DEFAULT_HEALTH = 100;
const DEFAULT_BITE_STRENGTH = 50;

class Animal {
  constructor(name, health = DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static alive = [];
  static updateAliveList() {
    Animal.alive = Animal.alive.filter((creature) => creature.health > 0);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(
    name,
    health = DEFAULT_HEALTH,
    biteStrength = DEFAULT_BITE_STRENGTH,
  ) {
    super(name, health);
    this.biteStrength = biteStrength;
  }

  bite(victim) {
    if (victim.hidden === false) {
      victim.health -= this.biteStrength;

      if (victim.health <= 0) {
        Animal.updateAliveList();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

const HALF_HEALTH = 50;

const NO_HEALTH = 0;

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
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
    if (victim.hidden
      || !Object.hasOwn(victim, 'hidden')
      || victim.health === 0) {
      return;
    }

    victim.health -= HALF_HEALTH;

    const victimIndex = Animal.alive.indexOf(victim);

    if (victim.health <= NO_HEALTH) {
      Animal.alive.splice(victimIndex, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

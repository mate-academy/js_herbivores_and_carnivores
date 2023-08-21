'use strict';

const ANIMAL_START_HEALTH = 100;
const CARNIVORE_DAMAGE = 50;
const DEFAULT_NAME = 'Unknown  animal';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name || DEFAULT_NAME;
    this.health = ANIMAL_START_HEALTH;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast instanceof Carnivore || beast.hidden) {
      return null;
    }

    beast.health -= CARNIVORE_DAMAGE;

    if (beast.health <= 0) {
      const index = Animal.alive.indexOf(beast);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

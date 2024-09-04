'use strict';

const BASE_HEALTH = 100;
const CARNIVORE_BITE_FORCE = 50;
const DEATH_HEALTH = 0;

class Animal {
  static alive = [];
  health = BASE_HEALTH;

  constructor(name) {
    this.name = name;
  }

  static removeFromAlive(creature) {
    this.alive = this.alive.filter((animal) => animal !== creature);
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= CARNIVORE_BITE_FORCE;

      if (herbivore.health <= DEATH_HEALTH) {
        Animal.removeFromAlive(herbivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

const MAX_HEALTH = 100;
const DEATH_HEALTH = 0;
const DAMAGE_BITE = 50;

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
    super();
    this.name = name;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= DAMAGE_BITE;
    }

    if (animal.health === DEATH_HEALTH) {
      Animal.alive = Animal.alive
        .filter(animals => animals.health !== DEATH_HEALTH);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

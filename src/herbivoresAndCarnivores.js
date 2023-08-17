'use strict';

const aliveAnimalsList = [];
const HEALTH = 100;
const BITE_POWER = 50;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = HEALTH;
    aliveAnimalsList.push(this);
  }

  static get alive() {
    return aliveAnimalsList.filter(animal => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.bitePower = BITE_POWER;
  }

  bite(victim) {
    if (victim.hidden || victim instanceof Carnivore) {
      return;
    }

    victim.health -= this.bitePower;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

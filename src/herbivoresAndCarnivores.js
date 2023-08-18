'use strict';

const HEALTH = 100;
const BITE_POWER = 50;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = HEALTH;
    Animal.aliveAnimalsList.push(this);
  }

  static get alive() {
    return Animal.aliveAnimalsList.filter(animal => animal.health > 0);
  }
}

Animal.aliveAnimalsList = [];

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

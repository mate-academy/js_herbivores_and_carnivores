'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = FULL_HEALTH;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

const HEALTH_DAMAGE = 50;
const FULL_HEALTH = 100;

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
  bite(herbivore) {
    if (herbivore.hasOwnProperty('hidden') && !herbivore.hidden) {
      herbivore.health -= HEALTH_DAMAGE;
    }

    if (!herbivore.health) {
      const deadHerbivoreIndex = Animal.alive.indexOf(herbivore);

      Animal.alive.splice(deadHerbivoreIndex, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

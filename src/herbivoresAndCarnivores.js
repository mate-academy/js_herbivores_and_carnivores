'use strict';

const ANIMAL_START_HEALTH = 100;
const CARNIVORE_DAMAGE = 50;
const DEFAULT_NAME = 'Unknown  animal';

class Animal {
  constructor(name) {
    this.name = name || DEFAULT_NAME;
    this.health = ANIMAL_START_HEALTH;

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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Carnivore || animal.hidden) {
      return;
    }

    animal.health -= CARNIVORE_DAMAGE;

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter(({ name }) => name !== animal.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

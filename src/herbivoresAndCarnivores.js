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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    const isAnimalCarnivore = animal instanceof Carnivore;

    if (isAnimalCarnivore || animal.hidden) {
      return;
    }

    animal.health -= CARNIVORE_DAMAGE;

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter(({ health }) => health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

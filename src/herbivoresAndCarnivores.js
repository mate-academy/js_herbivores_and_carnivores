/* eslint-disable no-console */
'use strict';

const FULL_HEALTH = 100;
const HEALTH_DEMAGE = 50;
const DIED_ANIMAL_HEALTH = 0;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = FULL_HEALTH;
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
  bite(herbivorAnimal) {
    if (herbivorAnimal.hidden === false) {
      herbivorAnimal.health -= HEALTH_DEMAGE;
    }

    Animal.alive = Animal.alive.filter(animal => (
      animal.health !== DIED_ANIMAL_HEALTH)
    );
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

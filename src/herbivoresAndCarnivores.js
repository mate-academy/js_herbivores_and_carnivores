'use strict';

const MAX_HEALTH = 100;
const DECREASED_HEALTH_BY_BITE = 50;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = MAX_HEALTH;
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
  bite(animalName) {
    if (animalName instanceof Herbivore
      && !animalName.hidden) {
      animalName.health -= DECREASED_HEALTH_BY_BITE;
    }

    if (animalName.health === 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health !== 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

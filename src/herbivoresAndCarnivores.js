'use strict';

class Animal {
  constructor(animal) {
    this.name = animal;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(animal, health) {
    super(animal, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(predator) {
    if (predator.hidden === false) {
      predator.health -= 50;
    }

    if (predator.health === 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

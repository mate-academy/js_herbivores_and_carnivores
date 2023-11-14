'use strict';

const HEALTH_DECREASE_COUNT = 50;
const DEFAULT_HEALTH = 100;

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

// Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = DEFAULT_HEALTH) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(bitedAnimal) {
    if (bitedAnimal instanceof Herbivore
      && bitedAnimal.hidden !== true) {
      bitedAnimal.health -= HEALTH_DECREASE_COUNT;

      if (bitedAnimal.health === 0) {
        Animal.alive.splice(Animal.alive.indexOf(bitedAnimal), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

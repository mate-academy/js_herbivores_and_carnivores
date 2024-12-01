'use strict';

const HEALTH_DECREASE_COUNT = 50;
const DEFAULT_HEALTH = 100;

class Animal {
  // write your code here
  constructor(name, health = DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
    if (bitedAnimal instanceof Herbivore && !bitedAnimal.hidden) {
      bitedAnimal.health -= HEALTH_DECREASE_COUNT;
    }

    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

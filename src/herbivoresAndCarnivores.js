'use strict';

const BASE_HEALTH = 100;
const BASE_ATTACK = 50;
const MIN_HEALTH = 0;

class Animal {
  constructor(name, health = BASE_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hidden === false && herbivore instanceof Herbivore) {
      herbivore.health -= BASE_ATTACK;

      if (herbivore.health <= MIN_HEALTH) {
        Animal.alive = Animal.alive.filter(animal => animal !== herbivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';
/* eslint-disable */

class Animal {
  static newBeast(newAnimal) {
    this.alive.push(newAnimal)
  }
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.newBeast(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {

  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {

  bite(beast) {
    if (beast instanceof Herbivore && !beast.hidden) {
      beast.health -= 50;
      if (beast.health <= 0) {
        Animal.alive = Animal.alive.filter(animal => animal.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

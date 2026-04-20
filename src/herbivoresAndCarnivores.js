'use strict';

class Animal {
  static allAnimals = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }

  static get alive() {
    return this.allAnimals.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  hidden = false;
  constructor(name, health = 100) {
    super(name, health);
    Animal.allAnimals.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.allAnimals.push(this);
  }

  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

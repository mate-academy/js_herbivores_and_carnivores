'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
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
  constructor() {
    super();

    this.isCarnivore = true;
  }

  bite(animal) {
    if (animal.hidden || animal.isCarnivore) {
      return;
    }

    animal.health -= 50;

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((pet) => pet.name !== animal.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

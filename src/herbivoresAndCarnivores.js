'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animalToBite) {
    if (animalToBite instanceof Herbivore && !animalToBite.hidden) {
      animalToBite.health -= 50;
    }

    if (animalToBite.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== animalToBite);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

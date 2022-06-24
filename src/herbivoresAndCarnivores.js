'use strict';

class Animal {
  static animalToDie(animal) {
    delete Animal.alive[Animal.alive.indexOf(animal)];
  }

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

    if (!animalToBite.health) {
      Animal.animalToDie(animalToBite);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

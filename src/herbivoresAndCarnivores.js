'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

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
  bite(animalToBite) {
    if (animalToBite instanceof Herbivore && !animalToBite.hidden) {
      animalToBite.health -= 50;

      if (animalToBite.health <= 0) {
        animalToBite.die();
      }
    }
  }
}

// console.log('HIIIIII');

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

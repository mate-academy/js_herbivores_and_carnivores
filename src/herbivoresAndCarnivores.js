'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if ((animal instanceof Carnivore) === false) {
      if (animal.hidden === false) {
        animal.health -= 50;
      }
    }

    if (animal.health === 0) {
      Animal.alive.pop(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

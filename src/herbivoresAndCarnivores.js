'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (!animal.hidden && (!(animal instanceof Carnivore))) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(animal), 1);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

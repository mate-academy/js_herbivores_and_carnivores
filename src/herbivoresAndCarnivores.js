'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static getAlive(animal) {
    Animal.alive = Animal.alive.filter(beast => beast !== animal);
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor() {
    super();
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.getAlive(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  constructor(health, name) {
    this.health = 100;
    this.name = name;
    Animal.addToAlive(this);
  }

  static addToAlive(animal) {
    Animal.alive.push(animal);
  }

  static removeFromAlive(animal) {
    Animal.alive = Animal.alive.filter(aliveAnimal => aliveAnimal !== animal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(health, name) {
    super(health, name);
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
      Animal.removeFromAlive(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

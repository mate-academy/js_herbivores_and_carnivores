'use strict';

class Animal {
  static removeFromAlive(animal) {
    Animal.alive = Animal.alive.filter(a => a !== animal);
  }

  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  health = 100;
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  health = 100;

  bite(animal) {
    if (!animal.hidden && !(animal instanceof Carnivore)) {
      animal.health -= 50;
      if (animal.health <= 0) {
        Animal.removeFromAlive(animal);
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

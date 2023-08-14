'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    this.hidden = false;
    Animal.alive.push(this);
  }

  static removeFromAlive(animal) {
    Animal.alive = Animal.alive.filter(a => a !== animal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.removeFromAlive(animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

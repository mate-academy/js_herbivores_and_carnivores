'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removedAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      if (!(animal instanceof Carnivore)) {
        animal.health -= 50;
        Animal.removedAnimals();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

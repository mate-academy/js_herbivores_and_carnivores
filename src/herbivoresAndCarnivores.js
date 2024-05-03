'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.alive.push(this);
  }

  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal instanceof Animal) || animal.hidden) {
      return;
    }

    if (animal instanceof Carnivore) {
      return;
    }

    animal.health -= 50;
    Animal.removeDeadAnimals();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

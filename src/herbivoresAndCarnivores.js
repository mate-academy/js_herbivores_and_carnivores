'use strict';

class Animal {
  static alive = [];

  static removeDeadAnimals() {
    this.alive = this.alive.filter(animal => animal.health > 0);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal instanceof Carnivore) && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.removeDeadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

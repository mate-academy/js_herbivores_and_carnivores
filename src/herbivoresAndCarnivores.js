'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100, hidden = false) {
    this.name = name;
    this.health = health;
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  static removeAnimals() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      return Animal.removeAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

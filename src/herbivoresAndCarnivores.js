'use strict';

class Animal {
  // static alive = [];

  constructor(name, health = 100, hidden = false) {
    this.name = name;
    this.health = health;
    this.hidden = hidden;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(bitedAnimal) {
    if (bitedAnimal instanceof Herbivore && bitedAnimal.hidden === false) {
      bitedAnimal.health -= 50;
    }

    Animal.alive = bitedAnimal.health === 0
      ? Animal.alive = Animal.alive.filter(animal => animal !== bitedAnimal)
      : Animal.alive;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

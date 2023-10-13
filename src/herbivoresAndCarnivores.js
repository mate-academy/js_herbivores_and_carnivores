'use strict';

const fullHealth = 100;
const attack = 50;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = fullHealth;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}
class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= attack;
    }

    if (!animal.health) {
      Animal.alive = Animal.alive.filter(aliveAnimal => aliveAnimal !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(health, name) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  super;

  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter(aliveAnimal => aliveAnimal !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hidden) {
    super(name);
    this.hidden = hidden;
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(anyAnimal) {
    if (anyAnimal instanceof Herbivore && !anyAnimal.hidden) {
      anyAnimal.health -= 50;
    }

    if (anyAnimal.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== anyAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

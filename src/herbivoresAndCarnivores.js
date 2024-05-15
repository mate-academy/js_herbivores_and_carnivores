'use strict';

class Animal {
  static alive = [];
  constructor({ health = 100, name }) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

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
  bite(bittedAnimal) {
    if (bittedAnimal instanceof Herbivore && !bittedAnimal.hidden) {
      bittedAnimal.health -= 50;
    }

    if (bittedAnimal.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== bittedAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

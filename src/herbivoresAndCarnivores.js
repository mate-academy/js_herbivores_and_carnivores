'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(bittedAnimal) {
    if (!bittedAnimal.hidden && bittedAnimal instanceof Herbivore) {
      bittedAnimal.health -= 50;
    }

    if (bittedAnimal.health === 0) {
      Animal.alive = Animal.alive
        .filter(animal => animal.name !== bittedAnimal.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

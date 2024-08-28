'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;

    Animal.alive.push(this);
  }

  reduceHealth(bitePower) {
    if (!this.hidden) {
      this.health -= bitePower;
    }

    if (this.health <= 0) {
      this.removeAnimal();
    }
  }

  removeAnimal() {
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
    const bitePower = 50;
    const hidden = animal.hidden;
    const herbivore = animal instanceof Herbivore;

    if (herbivore && !hidden) {
      animal.reduceHealth(bitePower);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

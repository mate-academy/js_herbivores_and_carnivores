"use strict";

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }

  static alive = [];
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.constructor === Carnivore || animal.hidden) {
      return;
    }

    animal.health -= 50;

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((a) => a !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

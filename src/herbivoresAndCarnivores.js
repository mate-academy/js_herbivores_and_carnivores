'use strict';

class Animal {
  // static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
    this.hidden = false;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Carnivore || animal.hidden === true) {
      return;
    }

    animal.health -= 50;

    if (animal.health === 0) {
      Animal.alive.splice(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

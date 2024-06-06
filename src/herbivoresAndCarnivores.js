'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100, hidden = false) {
    this.name = name;
    this.health = health;
    this.hidden = hidden;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden !== true && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      delete Animal.alive[Animal.alive.indexOf(animal)];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

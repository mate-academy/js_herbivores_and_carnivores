'use strict';

class Animal {
  static alive = []

  constructor(name) {
    this.mame = name;
    this.health = 100;
    this.hidden = false;
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
    if (animal instanceof Herbivore
      && animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(animal, 1));
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static deleteAnimal(animal) {
    if (animal.health === 0) {
      const index = Animal.alive.findIndex((a) => a === animal);

      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal instanceof Carnivore) && animal.hidden !== true) {
      animal.health -= 50;
    }

    Animal.deleteAnimal(animal);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

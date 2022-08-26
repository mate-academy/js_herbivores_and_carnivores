'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

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
  bite(animal) {
    const indexAnimal = Animal.alive.indexOf(animal);

    if (animal.hidden === false && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.alive.splice(indexAnimal, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

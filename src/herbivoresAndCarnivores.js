'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

const indexOfDeadAnimal = function(animalToRemove) {
  return Animal.alive.indexOf(animalToRemove);
};

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      delete Animal.alive[indexOfDeadAnimal(animal)];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

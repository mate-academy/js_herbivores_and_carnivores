'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
    if (animal.hidden === false && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      const indexOfDeadAnimal = Animal.alive.findIndex(el => el === animal);

      Animal.alive.splice(indexOfDeadAnimal, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

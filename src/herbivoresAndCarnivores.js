'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.allAnimals.push(this);
  }

  static get alive() {
    const res = [];

    for (const animal of Animal.allAnimals) {
      if (animal.health > 0) {
        res.push(animal);
      }
    }

    return res;
  };
}

Animal.allAnimals = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  };
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden !== true) {
      animal.health -= 50;
    }
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

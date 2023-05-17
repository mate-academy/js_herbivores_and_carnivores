'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;

    Animal.addAnimal(this);
  }

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static removeAnimal(animal) {
    this.alive = this.alive.filter(animals => animals !== animal);
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
      Animal.removeAnimal(animal);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

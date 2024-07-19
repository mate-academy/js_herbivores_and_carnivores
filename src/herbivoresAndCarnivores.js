'use strict';
class Animal {
  static alive = [];
  constructor(name) {
    this.health = 500;
    this.name = 'Test';
    Animal.alive.push(this.name);
  }
  static deleteIndex = Animal.alive.findIndex((animal) => animal.health !== 'dead');

  deleteAnimal() {
    Animal.alive = Animal.alive.filter((animal) => animal.name = 'dad');
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = true;
  }
  hide() {
    return this;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false && animal instanceof Animal) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      animal.deleteAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

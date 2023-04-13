'use strict';
class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static deleteAnimal(herbivore) {
    this.alive = this.alive.filter((ann, animalIndex) =>
      animalIndex !== this.alive.findIndex(animal => animal === herbivore));
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
    Animal.addAnimal(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.addAnimal(this);
  }
  bite(animal) {
    if (animal.hasOwnProperty('hidden') && animal.hidden !== true) {
      animal.health -= 50;

      if (animal.health === 0) {
        Animal.deleteAnimal(animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

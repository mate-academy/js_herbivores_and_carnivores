'use strict';

class Animal {
  static alive = [];

  static removeAnimal(animal) {
    const animalIndex = this.alive.indexOf(animal);

    this.alive.splice(animalIndex, 1);
  }

  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal instanceof Carnivore) && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health < 1) {
      Animal.removeAnimal(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

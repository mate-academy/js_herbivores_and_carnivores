'use strict';

class Animal {
  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static removeAnimal(animal) {
    this.alive = this.alive.filter(item => item !== animal);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.addAnimal(this);
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
  bite(bitedAnimal) {
    if (bitedAnimal instanceof Herbivore && !bitedAnimal.hidden) {
      bitedAnimal.health -= 50;
    }

    if (bitedAnimal.health <= 0) {
      Animal.removeAnimal(bitedAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

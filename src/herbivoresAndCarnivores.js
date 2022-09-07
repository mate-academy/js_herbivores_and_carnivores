'use strict';

class Animal {
  static addAlive(animal) {
    this.alive.push(animal);
  }

  static removeAlive(animal) {
    for (let i = 0; i < this.alive.length; i++) {
      if (this.alive[i].name === animal.name) {
        this.alive.splice(i, 1);
      }
    }
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.addAlive(this);
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
  bite(herbivoreAnimal) {
    if (herbivoreAnimal.hidden === false) {
      herbivoreAnimal.health -= 50;

      if (herbivoreAnimal.health === 0) {
        Animal.removeAlive(herbivoreAnimal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

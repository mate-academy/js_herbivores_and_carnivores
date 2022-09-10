'use strict';

class Animal {
  static addAlive(animal) {
    this.alive.push(animal);
  }

  static removeAlive(animal) {
    this.alive.splice(this.alive.findIndex(item =>
      item.name === animal.name && item.health <= 0), 1);
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

      if (herbivoreAnimal.health <= 0) {
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

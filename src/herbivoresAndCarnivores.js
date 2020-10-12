'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  static removeDeadAnimals(deadAnimal) {
    this.alive = this.alive.filter(animal => animal !== deadAnimal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  bite(beast) {
    if (beast instanceof Herbivore && !beast.hidden) {
      beast.health -= 50;
    }

    if (beast.health === 0) {
      Animal.removeDeadAnimals(beast);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

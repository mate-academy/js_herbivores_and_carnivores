'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  static addAnimal(animal) {
    Animal.alive.push(animal);
  }

  static removeAnimal(deadAnimal) {
    Animal.alive = Animal.alive.filter(animal => animal !== deadAnimal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
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
    this.health = 100;
    Animal.addAnimal(this);
  }

  bite(name) {
    if (name instanceof Herbivore && !name.hidden) {
      name.health -= 50;
    }

    if (name.health === 0) {
      Animal.removeAnimal(name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

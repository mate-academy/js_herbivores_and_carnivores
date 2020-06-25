'use strict';

class Animal {
  static addAnimal(newAnimal) {
    this.alive.push(newAnimal);
  }

  static removeAnimal(deadAnimal) {
    this.alive = this.alive.filter(animal => animal !== deadAnimal);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
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

  bite(name) {
    if (name instanceof Herbivore && !name.hidden) {
      name.health -= 50;

      if (name.health === 0) {
        Animal.removeAnimal(name);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

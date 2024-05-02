'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  static addToAlive(animal) {
    Animal.alive.push(animal);
  }

  static removeAnimal(animal) {
    Animal.alive = Animal.alive.filter((a) => a !== animal);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.addToAlive(this);
  }

  hide() {
    this.hidden = true;

    for (const animal of Animal.alive) {
      if (animal.name === this.name) {
        animal.hidden = true;
      }
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.addToAlive(this);
  }

  bite(herbivore) {
    if (herbivore.hasOwnProperty('hidden') && herbivore.hidden !== true) {
      herbivore.health -= 50;

      Animal.removeAnimal(herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

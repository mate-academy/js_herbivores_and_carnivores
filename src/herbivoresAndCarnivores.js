'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.addAnimal(this);
  }

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static removeAnimal(animal) {
    delete this.alive[this.alive.indexOf(animal)];
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herbivore) {
    if (herbivore.hidden === undefined || herbivore.hidden) {
      return;
    }

    herbivore.health -= 50;

    if (herbivore.health <= 0) {
      Animal.removeAnimal(herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

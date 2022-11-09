'use strict';

class Animal {
  // write your code here

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.addAnimal(this);
  }

  static addAnimal(animal) {
    Animal.alive.push(animal);
  }

  static removeAnimal(animal) {
    Animal.alive = Animal.alive.filter(item => item.name !== animal.name);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herbivore) {
    if (herbivore.hidden === false) {
      herbivore.health -= 50;
    }

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

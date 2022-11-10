'use strict';

class Animal {
  // write your code here

  constructor(name) {
    this.health = 100;
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
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
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

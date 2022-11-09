'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  static addAnimal(animal) {
    this.alive.push(animal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.addAnimal(this);
  }

  hide() {
    this.hidden = this.hidden ? 0 : true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    Animal.addAnimal(this);
  }

  bite(herbivore) {
    if (!herbivore.hidden && herbivore.constructor === Herbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(herbivore), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

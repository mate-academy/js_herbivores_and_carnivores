'use strict';

class Animal {
  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static removeAnimal(animal) {
    this.alive.splice(this.alive.indexOf(animal));
  }

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.addAnimal(this);
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
  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.removeAnimal(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

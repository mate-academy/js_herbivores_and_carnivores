'use strict';

class Animal {
  // write your code here
  constructor(animalName) {
    this.health = 100;
    this.name = animalName;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(herbivoreName) {
    super(herbivoreName);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;

      if (animal.health === 0) {
        Animal.alive.splice(Animal.alive.indexOf(animal), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

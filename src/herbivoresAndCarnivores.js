'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herbivoreAnimal) {
    if (herbivoreAnimal instanceof Herbivore
      && !herbivoreAnimal.hidden) {
      herbivoreAnimal.health -= 50;

      if (herbivoreAnimal.health === 0) {
        Animal.alive.splice(Animal.alive.indexOf(herbivoreAnimal), 1);
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

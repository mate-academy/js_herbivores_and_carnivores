'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = hidden || false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.health = health || 100;
  }


  bite(animalToBite) {
    if (animalToBite instanceof Herbivore && !animalToBite.hidden) {
      animalToBite.health -= 50;
      if (animalToBite.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(animalToBite), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

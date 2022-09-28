'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static diedAnimals() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target.hasOwnProperty('hidden')
      && !target.hidden) {
      target.health -= 50;

      if (target.health === 0) {
        Animal.diedAnimals();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

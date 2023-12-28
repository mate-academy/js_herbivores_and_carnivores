'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.allAnimals.push(this);
  }

  static get alive() {
    return Animal.allAnimals.filter(animal => animal.health > 0);
  }
}

Animal.allAnimals = [];

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
    if (!target.hidden
      && !(target instanceof Carnivore)
      && target.health > 0) {
      target.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

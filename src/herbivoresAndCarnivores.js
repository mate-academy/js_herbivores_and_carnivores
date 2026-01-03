'use strict';

class Animal {
  static allAnimals = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.allAnimals.push(this);
  }
  static get alive() {
    return Animal.allAnimals.filter((animal) => animal.health > 0);
  }
}

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
    if (target instanceof Herbivore && target.hidden) {
      return;
    }

    if (target instanceof Carnivore) {
      return;
    }

    target.health -= 50;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

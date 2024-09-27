'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static removeDead() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (!animal.health) {
      Animal.removeDead();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

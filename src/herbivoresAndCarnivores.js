'use strict';

class Animal {
  // write your code her

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static killAnimal() {
    Animal.alive = Animal.alive.filter((herbivore) => herbivore.health > 0);
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
  bite(bitten) {
    if (!bitten.hidden && bitten instanceof Herbivore) {
      bitten.health -= 50;

      Animal.killAnimal();
    }

    return this;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

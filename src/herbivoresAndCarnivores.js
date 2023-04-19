'use strict';

class Animal {
  // write your code her

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
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
    if (bitten.hidden === false && bitten instanceof Herbivore) {
      bitten.health -= 50;

      if (!bitten.health) {
        Animal.alive = Animal.alive.filter((herbivore) => herbivore.health > 0);
      }
    }

    return this;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

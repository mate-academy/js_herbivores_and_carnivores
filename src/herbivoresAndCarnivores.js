'use strict';

class Animal {
  constructor(health, name) {
    this.health = health;
    this.name = name;

    this.health = 100;

    Animal.alive.push(this);
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
  bite(bitten) {
    if (!bitten.hidden && bitten instanceof Herbivore) {
      bitten.health -= 50;
    }

    if (bitten.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== bitten);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

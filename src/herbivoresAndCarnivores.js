'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(bitten) {
    if (bitten instanceof Herbivore && bitten.hidden === false) {
      bitten.health -= 50;
    }

    if (bitten.health === 0) {
      Animal.alive = Animal.alive.filter((animal) => animal === !bitten);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

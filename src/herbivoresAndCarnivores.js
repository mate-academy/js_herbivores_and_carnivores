'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(bitten) {
    if (bitten instanceof Herbivore && !bitten.hidden) {
      bitten.health -= 50;
    }

    if (bitten.health === 0) {
      Animal.alive = Animal.alive.filter(animal => !bitten);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

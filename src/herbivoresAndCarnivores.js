'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = 100;

    if (Animal.alive === undefined) {
      Animal.alive = [];
    };
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
  // eslint-disable-next-line no-useless-constructor
  constructor(name, health) {
    super(name, health);
  }

  bite(bitten) {
    if (bitten.hidden === false && bitten instanceof Herbivore) {
      bitten.health -= 50;
    }

    if (bitten.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

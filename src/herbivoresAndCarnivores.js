'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

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
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(bitten) {
    if (bitten.hidden === false) {
      bitten.health -= 50;
    }

    if (bitten.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(x => x === bitten), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

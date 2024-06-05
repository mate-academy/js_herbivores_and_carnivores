'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }

  bitten() {}

  static alive = [];
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }

  bitten() {
    if (this.hidden) {
      return;
    }
    this.health -= 50;

    if (this.health === 0) {
      this.die();
    }
  }
}

class Carnivore extends Animal {
  bite(animal) {
    animal.bitten();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

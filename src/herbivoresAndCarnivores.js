'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;

    Animal.alive.push(this);
  }

  reduceHealth(amount) {
    if (!this.hidden) {
      this.health -= amount;
    }

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    const indexOfFoundBeast = Animal.alive.indexOf(this);
    if (indexOfFoundBeast !== -1) {
      Animal.alive.splice(indexOfFoundBeast, 1);
    }
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    const hidden = beast.hidden;
    const herbivore = beast instanceof Herbivore;

    if (herbivore && !hidden) {
      beast.reduceHealth(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

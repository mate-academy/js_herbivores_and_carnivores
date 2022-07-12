'use strict';

class Animal {
  constructor() {
    this.health = 100;

    this.hidden = false;

    if (!Animal.alive.includes(this)) {
      Animal.alive.push(this);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (!herb.hidden && herb instanceof Herbivore) {
      herb.health -= 50;
    }

    if (herb.health <= 0) {
      Animal.alive = Animal.alive.filter(item => herb !== item);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor() {
    super();

    this.hidden = false;
    this.health = 100;

    if (!Animal.alive.includes(this)) {
      Animal.alive.push(this);
    }
  };

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor() {
    super();
    this.health = 100;

    if (!Animal.alive.includes(this)) {
      Animal.alive.push(this);
    }
  };

  bite(herb) {
    if (!herb.hidden && herb instanceof Herbivore) {
      herb.health -= 50;
    }

    if (herb.health <= 0) {
      delete Animal.alive[(Animal.alive.findIndex(x => x === herb))];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

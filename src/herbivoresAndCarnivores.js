'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden === false
      ? this.hidden = true
      : this.hidden = false;
  }
}

class Carnivore extends Animal {
  constructor() {
    super();

    Animal.alive.push(this);
  }
  bite(beast) {
    if (beast instanceof Herbivore && beast.hidden === false) {
      beast.health -= 50;
    }

    if (beast.health === 0) {
      delete Animal.alive[Animal.alive.indexOf(beast)];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

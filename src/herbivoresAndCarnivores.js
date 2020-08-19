'use strict';

class Animal {
  constructor(name) {
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
  bite(x) {
    if (x instanceof Herbivore && x.hidden === false) {
      x.health -= 50;
    }

    if (x.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(x), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

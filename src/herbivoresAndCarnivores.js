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
  bite(beast) {
    if (beast.hidden === false && beast instanceof Herbivore === true) {
      beast.health -= 50;
    }

    if (beast.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal.name !== beast.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

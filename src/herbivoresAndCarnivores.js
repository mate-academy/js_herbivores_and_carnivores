'use strict';

class Animal {
  constructor(name, health) {
    this.health = health || 100;
    this.name = name;

    Animal.alive.push(this);
  }
}

  Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = hidden || false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {

  bite(beast) {
    if (beast.hidden === false && !(beast instanceof Carnivore)) {
      beast.health = beast.health - 50;
    }

    if (beast.health === 0) {
      Animal.alive = Animal.alive.filter(v => v !== beast);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

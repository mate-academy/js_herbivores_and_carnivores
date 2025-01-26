'use strict';

class Animal {
  static alive = [];

  health = 100;

  constructor(name) {
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast.hidden) {
      return;
    }

    if (beast instanceof Herbivore) {
      beast.health -= 50;
    }

    if (beast.health === 0) {
      Animal.alive = Animal.alive.filter(({ health }) => health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

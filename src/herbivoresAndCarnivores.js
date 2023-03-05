'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static deleteBeast() {
    Animal.alive = Animal.alive.filter((beast) => beast.health > 0);
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
    if (beast.hidden !== true && beast instanceof Herbivore) {
      beast.health -= 50;
    }

    if (beast.health < 50) {
      Animal.deleteBeast();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

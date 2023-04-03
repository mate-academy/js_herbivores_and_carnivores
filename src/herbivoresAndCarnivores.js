'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

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
    const isHerbivore = beast instanceof Herbivore;

    if (!isHerbivore || beast.hidden) {
      return;
    }

    beast.health -= 50;

    if (beast.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) =>
        animal.name !== beast.name
      );
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

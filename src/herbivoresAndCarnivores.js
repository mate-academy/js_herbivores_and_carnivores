'use strict';

class Animal {
  // TEST
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast instanceof Carnivore || beast.hidden) {
      return;
    }

    beast.health -= 50;

    if (beast.health <= 0) {
      const indexBeast = Animal.alive.findIndex((animal) => animal === beast);

      Animal.alive.splice(indexBeast, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

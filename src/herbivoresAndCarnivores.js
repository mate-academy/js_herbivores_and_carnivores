'use strict';

class Animal {
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
  static VALUE_OF_BITES = 50;

  bite(beast) {
    if (beast instanceof Carnivore || beast.hidden) {
      return;
    } else {
      beast.health -= Carnivore.VALUE_OF_BITES;
    }

    if (beast.health <= 0) {
      const indexBeast = Animal.alive.findIndex((item) => item === beast);

      Animal.alive.splice(indexBeast, 1);
    }

    return Animal.alive;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

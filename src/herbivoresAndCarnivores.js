'use strict';

class Animal {
  static alive = [];

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
  static VALUE_OF_BITES = 50;

  bite(beast) {
    if (beast instanceof Carnivore) {
      return;
    }

    if (beast.hidden) {
      return;
    } else {
      beast.health -= Carnivore.VALUE_OF_BITES;
    }

    if (beast.health <= 0) {
      const indexBeast = Animal.alive.findIndex((item) => item === beast);

      Animal.alive.splice(indexBeast, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

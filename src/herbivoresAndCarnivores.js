'use strict';

const FULL_HP = 100;
const GRRRRRR = 50;
const GEGE = 0;

class Animal {
  static alive = [];

  constructor(name, health = FULL_HP) {
    this.name = name;
    this.health = health;
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
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= GRRRRRR;
    }

    if (animal.health === GEGE) {
      Animal.alive = Animal.alive.filter(herbivore => herbivore !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

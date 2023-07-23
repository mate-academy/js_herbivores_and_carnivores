'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
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
  bite(victim) {
    if (victim.hidden === false && victim instanceof Herbivore) {
      victim.health -= 50;
    }

    Animal.alive = Animal.alive.filter(pet => pet.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

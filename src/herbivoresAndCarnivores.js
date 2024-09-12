'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  health = 100;
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim.hidden !== true && victim.__proto__ !== Carnivore.prototype) {
      victim.health -= 50;
    }

    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  health = 100;
  static alive = [];

  constructor(name) {
    this.name = name;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(unknown) {
    if (unknown.hidden === true) {
      return;
    }

    if (unknown instanceof Herbivore) {
      unknown.health -= 50;
    }

    Animal.alive = Animal.alive.filter((objAnim) => objAnim.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

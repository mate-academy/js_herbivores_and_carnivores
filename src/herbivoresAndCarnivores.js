'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  };
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim.hidden !== true
      && victim instanceof Herbivore) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      Animal.alive = Animal.alive.filter(
        animal => animal.health > 0
      );
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

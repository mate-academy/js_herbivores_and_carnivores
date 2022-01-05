'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = !(this.hidden);
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore
        && victim.hidden !== true) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      victim.health = 0;

      Animal.alive.splice(
        Animal.alive.findIndex(carcass => carcass === victim), 1);
    };
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

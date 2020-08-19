'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;
    }

    if (victim.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(victim, 1));
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

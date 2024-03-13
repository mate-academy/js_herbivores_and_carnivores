'use strict';

const HEALTH = 100;
const DAMAGE = 50;

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = HEALTH;
    Animal.alive.push(this);
  }

  static alive = [];
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hidden === false) {
      herbivore.health -= DAMAGE;
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

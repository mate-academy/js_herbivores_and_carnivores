'use strict';

class Animal {
  createArray() {
    if (!Animal.alive) {
      Animal.alive = [];
    }
  }
  // The ways with static alive = []
  // or Animal.alive = [] didnt pass the Elinter;

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;

    this.createArray();
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if ((victim instanceof Herbivore) && victim.hidden === false) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      delete Animal.alive[Animal.alive.indexOf(victim)];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

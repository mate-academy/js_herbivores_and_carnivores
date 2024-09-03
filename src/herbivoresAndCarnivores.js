'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.addAlive();
  }

  addAlive() {
    Animal.alive.push(this);
  }

  static healthCheck() {
    Animal.alive = Animal.alive.filter((item) => item.health > 0);
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
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;

      Animal.healthCheck();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

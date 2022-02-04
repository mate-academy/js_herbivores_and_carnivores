'use strict';

class Animal {
  static alive = []

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim.hidden !== true && victim instanceof Herbivore) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

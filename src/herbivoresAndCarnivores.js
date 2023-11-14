'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removedKillAnimal() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  bite(victim) {
    if (victim.hidden === false && victim instanceof Herbivore) {
      victim.health -= 50;
    }

    Animal.removedKillAnimal();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static updateAlive() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
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
  constructor(name) {
    super(name);
  }

  bite(target) {
    if (!(target instanceof Herbivore) || target.hidden || this === target) {
      return;
    }
    target.health -= 50;
    target.hidden = false;
    Animal.updateAlive();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

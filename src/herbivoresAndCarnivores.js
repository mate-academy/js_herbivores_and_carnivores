'use strict';
/* eslint-disable */

class Animal {
  static newBeast(contecst) {
    this.alive.push(contecst)
  }
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.newBeast(this);
  }
  // write your code here
}

Animal.alive = [];

class Herbivore extends Animal {

  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (!beast.hidden && beast instanceof Carnivore === false) {
      beast.health -= 50;
    }
    Animal.alive = Animal.alive.filter(animal => animal.health > 0)
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

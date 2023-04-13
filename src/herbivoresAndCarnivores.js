'use strict';

class Animal {
  constructor(health = 100, name, hidden) {
    this.health = health;
    this.name = name;
    this.hidden = hidden;
  }

  static alive = [];

  static removeAnimal(animal) {

  }
}

class Herbivore extends Animal {
  constructor(health, name, hidden) {
    super(health, name, hidden);
  }
  hide() {
    hidden = false;
  }
}

class Carnivore extends Animal {

  constructor(health, name, hidden) {
    super(health, name, hidden);
  }
  // write your code here
  bite() {
    health -= 50;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

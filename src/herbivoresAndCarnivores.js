'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.addAlive(this);
  }

  static addAlive(animal) {
    Animal.alive.push(animal);
  }

  static getAlive() {
    return Animal.alive;
  }

  static removeAlive(animal) {
    Animal.alive = Animal.alive.filter((item) => item !== animal);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100, hidden = false) {
    super(name);
    this.health = health;
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name);
    this.health = health;
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.removeAlive(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  // write your code here
  static alive = [];

  static removeDead() {
    const aliveAnimals = this.alive.filter((animal) => animal.health > 0);

    this.alive = [...aliveAnimals];
  }

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(health, name) {
    super(health, name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(health, name) {
    super(health, name);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (!animal.hidden && animal.constructor.name === 'Herbivore') {
      animal.health -= 50;
    }

    Animal.removeDead();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

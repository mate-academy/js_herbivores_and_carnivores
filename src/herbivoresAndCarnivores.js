'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
  }

  static removeDead() {
    const aliveAnimals = this.alive.filter((animal) => animal.health > 0);

    this.alive = [...aliveAnimals];
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
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

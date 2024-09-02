'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
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
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
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

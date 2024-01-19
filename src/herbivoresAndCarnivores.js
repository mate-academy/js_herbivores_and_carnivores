'use strict';

const fullHealth = 100;

class Animal {
  constructor(name, health = fullHealth) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  bite(animal) {
    const biteValue = 50;
    const dead = 0;

    if (animal.hidden !== true && animal instanceof Herbivore) {
      animal.health -= biteValue;

      if (animal.health <= dead) {
        Animal.alive = Animal.alive.filter(e => e.health > dead);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

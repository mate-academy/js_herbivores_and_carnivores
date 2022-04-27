'use strict';

class Animal {
  static alive = [{}];

  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  static deathAlive(animal) {
    for (let i = 0; i < Animal.alive.length; i++) {
      if (Animal.alive[i] === animal) {
        delete Animal.alive[i];
      }
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name);
    this.hidden = hidden;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (!animal.hidden && !(animal instanceof Carnivore)) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.deathAlive(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.addToAlive(this);
  }

  static addToAlive(animal) {
    this.alive.push(animal);
  }

  static removeFromAlive(animal) {
    this.alive = this.alive.filter(item => item !== animal);
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
  }
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.removeFromAlive(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

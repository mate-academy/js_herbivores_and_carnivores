'use strict';

class Animal {
  static checkingIsAlive() {
    this.alive = this.alive.filter(animal => animal.health > 0);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal instanceof Carnivore) && animal.hidden === false) {
      animal.health -= 50;

      Animal.checkingIsAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  static get alive() {
    return Animal.aliveArray.filter(a => a.health > 0);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.aliveArray.push(this);
  }
}

Animal.aliveArray = [];

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
    if (animal instanceof Herbivore && animal.hidden !== true) {
      animal.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

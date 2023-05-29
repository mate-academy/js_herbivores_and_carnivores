'use strict';

class Animal {
  static get alive() {
    return this.animalsCreated
      .filter(animal => animal.health > 0);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.animalsCreated.push(this);
  }
}

Animal.animalsCreated = [];

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
  bite(victim) {
    if (victim.constructor.name === 'Herbivore' && victim.hidden !== true) {
      victim.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

/* eslint-disable no-useless-constructor */
'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);

    this.hidden = hidden || false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hidden !== true && herbivore instanceof Carnivore !== true) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

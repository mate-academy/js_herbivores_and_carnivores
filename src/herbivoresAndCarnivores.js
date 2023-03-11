/* eslint-disable max-len */
'use strict';

class Animal {
  // static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
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

    return this;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.constructor.name === 'Herbivore' && herbivore.hidden === false) {
      herbivore.health -= 50;

      Animal.alive = Animal.alive.filter(beast => beast.health > 0);

      return herbivore.health;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

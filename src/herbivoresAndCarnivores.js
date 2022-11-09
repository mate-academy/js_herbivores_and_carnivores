'use strict';

class Animal {
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
    this.hidden = true;

    return this;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;
    }

    if (!victim.health) {
      const findVictim = Animal.alive
        .findIndex(animal => animal.name === victim.name);

      Animal.alive.splice(findVictim);
    }

    return this;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

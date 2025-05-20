'use strict';

class Animal {
  static active = [];

  constructor(name, health) {
    if (typeof name !== 'string' || name.trim().length === 0) {
      throw new Error('Invalid name');
    }

    this.health = Number.isFinite(health) ? health : 100;
    this.name = name;

    Animal.active.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
    }

    if (herbivore.hidden <= 0) {
      Animal.active.filter((a) => a !== herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

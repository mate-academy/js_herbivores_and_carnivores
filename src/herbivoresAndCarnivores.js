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
    super(name, health, hidden);
    this.hidden = hidden || false;
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  bite(name) {
    if (name instanceof Herbivore && name.hidden !== true) {
      name.health -= 50;
    }

    const result = Animal.alive.filter(animal => animal.health === 0);

    Animal.alive = result;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

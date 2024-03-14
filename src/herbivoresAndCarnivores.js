'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
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
  bite(name) {
    if (name.hidden === true || name instanceof Carnivore) {
      return this;
    } else {
      name.health -= 50;
    }

    if (name.health === 0) {
      delete Animal.alive[Animal.alive.indexOf(name)];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

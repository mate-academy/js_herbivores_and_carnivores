'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (this instanceof Animal) {
      Animal.alive.push(this);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name);
  }

  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;
    }

    Animal.alive = Animal.alive.filter((animal) => animal.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

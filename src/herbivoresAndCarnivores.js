'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor() {
    super();

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor() {
    super();

    Animal.alive.push(this);
  }

  bite(herb) {
    if (herb.hidden === false) {
      herb.health -= 50;
    }

    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.alive = [];

    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(...args) {
    super();
  }

  bite(herb) {
    if (herb.hidden === false && herb instanceof Herbivore) {
      herb.health -= 50;
    }

    if (herb.health <= 0) {
      herb.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

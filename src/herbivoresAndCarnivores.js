'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.alive = [];

    Animal.alive.push(this);
  }
}

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
  bite(animal) {
    if (!animal.hidden && animal.hasOwnProperty('hidden')) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive.filter((herb) => herb.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

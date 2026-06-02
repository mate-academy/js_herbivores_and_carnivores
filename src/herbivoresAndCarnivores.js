'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name, health) {
    super(name, health);
    this.health = health || 100;
    this.name = name;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }

  bite(herbivore) {
    if (herbivore.hidden === false && Animal.alive.includes(herbivore)) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      delete Animal.alive[Animal.alive.indexOf(herbivore)];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

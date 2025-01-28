'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.alive.push(this);
  }

  die() {
    this.health = 0;
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }

  get isAlive() {
    return this.health > 0;
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    if (!(animal instanceof Herbivore) || animal.hidden) {
      return;
    }
    animal.health -= 50;

    if (!animal.isAlive) {
      animal.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

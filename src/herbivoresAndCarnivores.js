'use strict';

class Animal {
  static alive = [];

  static alive() {
    return this.alive;
  }

  constructor(name) {
    this.health = 100;
    this.name = name;

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

  bite() {
    this.health = this.health - 50;

    if (this.health <= 0) {
      this.health = 0;
      Animal.alive.splice(Animal.alive.indexOf(this), 1);
    }
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore === undefined
      || !(herbivore instanceof Herbivore)
      || herbivore.hidden === true) {
      return;
    }

    herbivore.bite();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

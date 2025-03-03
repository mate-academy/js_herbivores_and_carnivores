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
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }

  checkIfAlive() {
    if (this.health <= 0) {
      this.die();
    }
  }
}

class Herbivore extends Animal {
  constructor() {
    super('name');
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor() {
    super('name');
  }

  bite(herbivore) {
    if (!(herbivore instanceof Herbivore) || herbivore.hidden) {
      return;
    }

    herbivore.health -= 50;
    herbivore.checkIfAlive();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

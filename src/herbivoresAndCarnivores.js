'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  get isAlive() {
    return this.health > 0;
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    const isHerbivore = prey instanceof Herbivore;

    if (!isHerbivore || prey.hidden) {
      return;
    }

    prey.health -= 50;

    if (!prey.isAlive) {
      prey.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

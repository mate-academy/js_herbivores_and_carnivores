'use strict';

class Animal {
  static addToAlive(animalObj) {
    this.alive.push(animalObj);
  }

  static removeFromAlive(animalObj) {
    const animalIndex = this.alive.indexOf(animalObj);

    this.alive.splice(animalIndex, 1);
  }

  constructor(name, health) {
    const defaultHealth = 100;

    this.name = name;
    this.health = health || defaultHealth;

    Animal.addToAlive(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    const bitePower = 50;
    const isHerbivore = victim instanceof Herbivore;

    if (!victim.hidden && isHerbivore) {
      victim.health -= bitePower;
    }

    if (victim.health <= 0) {
      Animal.removeFromAlive(victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

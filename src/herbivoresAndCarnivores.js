'use strict';

class Animal {
  static alive = [];

  static newAnimal(animalObj) {
    this.alive.push(animalObj);
  }

  static animalDeath(animalObj) {
    const animalIndex = this.alive.indexOf(animalObj);

    this.alive.splice(animalIndex, 1);
  }

  constructor(name, health) {
    const defaultHealth = 100;

    this.name = name;
    this.health = health || defaultHealth;

    Animal.newAnimal(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    const bitePower = 50;
    const isHerbivore = Object.hasOwnProperty.call(victim, 'hidden');

    if (!victim.hidden && isHerbivore) {
      victim.health -= bitePower;
    }

    if (victim.health <= 0) {
      Animal.animalDeath(victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

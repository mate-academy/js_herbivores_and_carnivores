'use strict';

class Animal {
  static addNewAnimal(animalObj) {
    this.alive.push(animalObj);
  }

  static removeDeadAnimal(animalObj) {
    const animalIndex = this.alive.indexOf(animalObj);

    this.alive.splice(animalIndex, 1);
  }

  constructor(name, health) {
    const defaultHealth = 100;

    this.name = name;
    this.health = health || defaultHealth;

    Animal.addNewAnimal(this);
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

    if (isHerbivore && !victim.hidden) {
      victim.health -= bitePower;
    }

    if (victim.health <= 0) {
      Animal.removeDeadAnimal(victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

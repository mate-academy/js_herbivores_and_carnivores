'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeIfDead(animal) {
    if (animal.health > 0) {
      return;
    }

    Animal.alive = Animal.alive.filter((el) => el !== animal);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    const biteDamage = 50;

    if (animal instanceof Carnivore || animal.hidden) {
      return;
    }

    animal.health -= biteDamage;

    Animal.removeIfDead(animal);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

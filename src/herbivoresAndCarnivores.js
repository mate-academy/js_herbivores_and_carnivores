'use strict';

const fullHealth = 100;
const biteDamage = 50;

class Animal {
  static alive = [];

  constructor(name, health = fullHealth) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  removeIfDead() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= biteDamage;
      animal.removeIfDead();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

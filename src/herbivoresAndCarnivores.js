'use strict';

const healthByDefault = 100;
const decreaseOfHealth = 50;
const deadBeast = 0;

class Animal {
  static alive = [];
  constructor(name, health = healthByDefault) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
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
    const isCarnivore = animal instanceof Carnivore;

    if (!isCarnivore && !animal.hidden) {
      animal.health -= decreaseOfHealth;
    }

    if (animal.health <= deadBeast) {
      Animal.alive = Animal.alive.filter((beast) => beast.health > deadBeast);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

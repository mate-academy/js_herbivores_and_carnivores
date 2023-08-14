'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  reduceHealth(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    Animal.alive = Animal.alive.filter(animal => animal !== this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal, amount = 50) {
    if (animal.hidden || animal instanceof Carnivore) {
      return;
    }
    animal.reduceHealth(amount);
  }
}

Animal.staticProperty = true;

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

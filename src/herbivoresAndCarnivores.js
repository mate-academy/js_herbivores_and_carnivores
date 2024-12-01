'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.addToAlive(this);
  }

  static addToAlive(animal) {
    if (!Animal.alive) {
      Animal.alive = [];
    }

    Animal.alive.push(animal);
  }

  static removeDead() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
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
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.removeDead();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

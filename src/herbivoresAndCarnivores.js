'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.addAlive(this);
  }

  static addAlive(animal) {
    Animal.alive.push(animal);
  }

  static removeDead() {
    return Animal.alive.filter(animal => animal.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = hidden || false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.demage = 50;
  }

  bite(herbivore) {
    if (
      herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= this.demage;
      Animal.alive = Animal.removeDead();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

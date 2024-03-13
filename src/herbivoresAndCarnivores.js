'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
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
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = !this.hidden;
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
    }

    if (herbivore.health <= 0) {
      Animal.alive = Animal.removeDead();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

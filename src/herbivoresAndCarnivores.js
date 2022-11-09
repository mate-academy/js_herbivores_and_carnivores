'use strict';

class Animal {
  static alive = [];

  static addToAlive(animal) {
    this.alive.push(animal);
  }

  static removeFromAlive(animal) {
    if (this.alive.includes(animal)) {
      this.alive = this.alive.filter(beast => beast !== animal);
    }
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.addToAlive(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);

    this.hidden = hidden;
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

    if (animal.health === 0) {
      Animal.removeFromAlive(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

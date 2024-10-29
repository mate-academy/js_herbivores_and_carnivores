'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
    this.checkIfAlive();
  }

  checkIfAlive() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((a) => a.health > 0);
    }
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
      animal.checkIfAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

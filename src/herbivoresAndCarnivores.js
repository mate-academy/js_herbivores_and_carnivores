'use strict';

class Animal {
  static allAnimals = [];
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.allAnimals.push(this);
    Animal.alive.push(this);
  }

  static updateAliveAnimals() {
    Animal.alive = Animal.allAnimals.filter((animal) => animal.health > 0);
  }

  checkIfAlive() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
      Animal.allAnimals = Animal.allAnimals.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
      animal.checkIfAlive();
      Animal.updateAliveAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

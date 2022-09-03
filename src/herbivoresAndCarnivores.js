'use strict';

class Animal {
  static alive = [];

  static checkHealth(animal) {
    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(elem => elem !== animal);
    }
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
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
  bite(animal) {
    if (animal.hidden || animal instanceof Carnivore) {
      return;
    }
    animal.health -= 50;
    Animal.checkHealth(animal);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

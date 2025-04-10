'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  static checkHealth() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(health, name) {
    super(health, name);
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
      Animal.checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

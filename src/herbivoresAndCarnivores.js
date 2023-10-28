'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  dieAnimal() {
    Animal.alive = Animal.alive
      .filter(animal => animal.name !== this.name);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;
      victim.dieAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

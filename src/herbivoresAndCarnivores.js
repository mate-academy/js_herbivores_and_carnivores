'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = hidden || false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health === 0) {
        Animal.alive = Animal.alive.filter(item => item !== animal);
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

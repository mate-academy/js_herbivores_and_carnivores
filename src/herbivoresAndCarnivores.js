'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    this.addToAlive(this);
  }

  addToAlive(animal) {
    Animal.alive.push(animal);
  }

  removeFromAlive(animal) {
    Animal.alive = Animal.alive.filter(aliveAnimal => aliveAnimal !== animal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(health, name, hidden = false) {
    super(health, name);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;

      if (victim.health <= 0) {
        this.removeFromAlive(victim);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

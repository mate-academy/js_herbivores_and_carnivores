'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.addToAlive(this);
  }

  static addToAlive(animal) {
    Animal.alive.push(animal);
  }

  static removeAlive(animal) {
    Animal.alive = Animal.alive.filter(aliveAnimal => aliveAnimal !== animal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = hidden || false;
  }

  hide() {
    if (this.hidden) {
      this.hidden = false;
    }

    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!target.hidden && target instanceof Herbivore) {
      target.health -= 50;
    }

    if (target.health === 0) {
      Animal.removeAlive(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

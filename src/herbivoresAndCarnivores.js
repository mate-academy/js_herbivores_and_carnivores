'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
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
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
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

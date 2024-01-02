'use strict';

const FULL_HEALTH = 100;
const HALF_HEALTH = 50;

class Animal {
  static alive = []

  constructor(name) {
    this.name = name;
    this.health = FULL_HEALTH;
    Animal.alive.push(this);
  }

  static removeDead(animal) {
    Animal.alive = Animal.alive.filter((aliveAnimal) => aliveAnimal !== animal);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(targetAnimal) {
    if (targetAnimal instanceof Carnivore || targetAnimal.hidden) {
      return;
    }

    targetAnimal.health -= HALF_HEALTH;

    if (targetAnimal.health <= 0) {
      Animal.removeDead(targetAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

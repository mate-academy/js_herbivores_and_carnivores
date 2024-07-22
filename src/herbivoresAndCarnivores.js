'use strict';

const DEFAULT_HEALTH = 100;
const HEALTH_DEDUCTION = 50;

class Animal {
  static alive = [];

  constructor(name, health = DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = DEFAULT_HEALTH) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= HEALTH_DEDUCTION;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter(
          (aliveAnimal) => aliveAnimal !== animal,
        );
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

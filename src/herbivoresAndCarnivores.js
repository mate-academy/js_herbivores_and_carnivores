'use strict';

const FULL_HEALTH = 100;
const HALF_HEALTH = 50;

class Animal {
  static alive = [];
  constructor(name, health = FULL_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= HALF_HEALTH;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter(
          (someAnimal) => someAnimal !== animal,
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

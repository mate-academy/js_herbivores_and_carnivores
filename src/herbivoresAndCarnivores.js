'use strict';

const DEFAULT_HEATH = 100;
const DECREASE_HEATH = 50;

class Animal {
  static alive = [];

  constructor(name, health = DEFAULT_HEATH) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
  static removeDeadAnimal() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= DECREASE_HEATH;
    }

    if (animal.health <= 0) {
      Animal.removeDeadAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

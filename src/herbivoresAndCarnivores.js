"use strict";

const ANIMAL_DAMAGE = 50;
const ANIMAL_BASE_HP = 100;
const ANIMAL_MINIMUM_HP = 0;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = ANIMAL_BASE_HP;
    Animal.alive.push(this);
  }

  static alive = [];

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
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
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (
      animal instanceof Carnivore ||
      (animal instanceof Herbivore && animal.hidden)
    ) {
      return;
    }

    animal.health -= ANIMAL_DAMAGE;

    if (animal.health <= ANIMAL_MINIMUM_HP) {
      animal.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

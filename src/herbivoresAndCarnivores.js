'use strict';

const FULL_HEALTH = 100;
const DIED_VALUE = 0;
const BITE_DEMAGE = 50;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = FULL_HEALTH;

    Animal.alive.push(this);
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
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= BITE_DEMAGE;
    }

    if (animal.health <= DIED_VALUE) {
      Animal.alive = Animal.alive.filter(({ health }) => health > DIED_VALUE);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

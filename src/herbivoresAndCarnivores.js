'use strict';

const FULL_HEALTH = 100;
const HALF_HEALTH = 50;
const DEAD = 0;

class Animal {
  static alive = [];

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
    if ((animal instanceof Herbivore) && (animal.hidden === false)) {
      animal.health -= HALF_HEALTH;

      Animal.alive = Animal.alive.filter(({ health }) => health > DEAD);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

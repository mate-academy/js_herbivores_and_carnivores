'use strict';

const HEALTH = 100;
const HALF_OF_HEALTH = 50;
const DEAD = 0;

class Animal {
  constructor(name) {
    this.health = HEALTH;
    this.name = name;

    Animal.alive.push(this);
  }
}
Animal.alive = [];

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
  bite(prey) {
    if (prey.hidden || prey instanceof Carnivore) {
      return;
    }

    prey.health -= HALF_OF_HEALTH;

    if (prey.health <= DEAD) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > DEAD);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

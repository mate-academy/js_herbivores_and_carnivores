'use strict';

const FULL_HEALTH = 100;
const DAMAGE = 50;
const DIED = 0;

class Animal {
  constructor(name, health = FULL_HEALTH) {
    this.name = name;
    this.health = health;
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
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= DAMAGE;
    }

    if (prey.health === DIED) {
      const diedAnimal = Animal.alive.indexOf(prey);

      Animal.alive.splice(diedAnimal, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

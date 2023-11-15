'use strict';

const DAMAGE_AMOUNT = 50;
const HEALTH_AMOUNT = 100;
const HEALTH_MIN = 0;

class Animal {
  constructor(name, health = HEALTH_AMOUNT) {
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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= DAMAGE_AMOUNT;
    }

    if (animal.health <= HEALTH_MIN) {
      Animal.alive = Animal.alive.filter(
        creature => creature.health > HEALTH_MIN);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

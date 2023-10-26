'use strict';

const HEALTH_BY_DEFAULT = 100;
const DAMAGE_AMOUNT = 50;
const MINIMAL_AMOUNT_OF_HEALTH = 0;

class Animal {
  constructor(name, health = HEALTH_BY_DEFAULT, hidden = false) {
    this.name = name;
    this.health = health;
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive.splice(Animal.alive.indexOf(this), 1);
  }

  getDamage(amount) {
    this.health -= amount;

    if (this.health <= MINIMAL_AMOUNT_OF_HEALTH) {
      this.die();
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false && animal instanceof Herbivore) {
      animal.getDamage(DAMAGE_AMOUNT);
    }
  }
}

module.exports = {
  Animal, Herbivore, Carnivore,
};

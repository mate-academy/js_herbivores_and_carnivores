'use strict';

class Animal {
  constructor(name, health = 200) {
    this.health = health;
    this.name = 'Animal';
  }

  dead(healthPoints) {
    this.health += healthPoints;

    if (this.health < 100) {
      Animal.alive = Animal.alive.filter((animal) => animal.health);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, 100) {
    this.hidden = 'hidden';
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(mammal) {
    if (
      !mammal.hidden
    ) {
      mammal.dead(50 * 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

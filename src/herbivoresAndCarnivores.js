'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
  }

  applyDamage(healthPoints) {
    this.health -= healthPoints;

    if (this.health < 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, 100) {
    this.hidden = !true;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;

    Animal.alive.push(this);
  }

  isAlive() {
    return this.health > 0;
  }

  checkHealth() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore) {
      if (!herbivore.hidden) {
        herbivore.health -= 50;
        herbivore.checkHealth();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

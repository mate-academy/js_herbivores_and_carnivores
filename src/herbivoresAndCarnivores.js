'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal.health !== 0);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }

  getBitten(amount) {
    if (!this.hidden) {
      this.health -= amount;

      if (this.health <= 0) {
        this.die();
      }
    }
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (!(prey instanceof Carnivore) && !prey.hidden) {
      prey.getBitten(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

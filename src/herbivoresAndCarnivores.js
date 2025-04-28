'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  isAlive() {
    return this.health > 0;
  }

  die() {
    if (this.health === 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }

  updateHealth(change) {
    this.health += change;

    if (!this.isAlive()) {
      this.die();
    }
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore) {
      if (!prey.hidden) {
        prey.updateHealth(-50);
      }
    }
  }
}

module.exports = { Animal, Carnivore, Herbivore };

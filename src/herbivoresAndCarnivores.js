'use strict';

class Animal {
  static alive = [];

  constructor(health, name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  removeDead() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(health, name);
  }

  bite(individual) {
    if (individual instanceof Herbivore && !individual.hidden) {
      individual.health -= 50;

      if (individual.health <= 0) {
        individual.removeDead();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

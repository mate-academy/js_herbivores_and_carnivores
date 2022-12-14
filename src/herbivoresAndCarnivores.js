'use strict';

class Animal {
  constructor(health, name) {
    this.health = 100;
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
  bite(animal) {
    if (animal.hidden === false && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter(creature => creature.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

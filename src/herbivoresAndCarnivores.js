'use strict';

class Animal {
  constructor(name, health = 0) {
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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(animalAlive => animalAlive.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

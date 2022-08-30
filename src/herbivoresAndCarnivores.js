'use strict';

class Animal {
  constructor(animal, health = 100) {
    this.name = animal;
    this.health = health;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(animal, health = 100) {
    super(animal, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(aPieceOfHerbivore) {
    if (aPieceOfHerbivore.hidden === false) {
      aPieceOfHerbivore.health -= 50;
    }

    if (aPieceOfHerbivore.health === 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

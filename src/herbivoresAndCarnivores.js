'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.animalBorn(this);
  }

  static alive = [];

  static animalBorn(animal) {
    this.alive.push(animal);
  }

  static animalDie(animal) {
    Animal.alive = Animal.alive.filter(element => element !== animal);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    const canBite = (animal instanceof Herbivore) && animal.hidden === false;

    animal.health = canBite
      ? animal.health - 50
      : animal.health;

    if (animal.health <= 0) {
      Animal.animalDie(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

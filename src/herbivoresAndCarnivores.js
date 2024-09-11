'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  animalHealthCheck() {
    Animal.alive = Animal.alive.filter(
      (curretAnimal) => curretAnimal.health > 0,
    );
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
      animal.animalHealthCheck();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

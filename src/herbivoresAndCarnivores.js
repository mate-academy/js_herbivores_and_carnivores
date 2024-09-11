'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  animalHealthCheck() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter(
        (curretAnimal) => curretAnimal !== this,
      );
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
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

'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static isAnimalDead(animal) {
    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(
        (currentAnimal) => currentAnimal !== animal,
      );
    }
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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }
    Animal.isAnimalDead(animal);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

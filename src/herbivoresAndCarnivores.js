'use strict';

class Animal {
  constructor(animal) {
    this.name = animal;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(animal) {
    super(animal);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(targetAnimal) {
    if (!targetAnimal.hidden && targetAnimal instanceof Herbivore) {
      targetAnimal.health -= 50;
    }

    if (targetAnimal.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

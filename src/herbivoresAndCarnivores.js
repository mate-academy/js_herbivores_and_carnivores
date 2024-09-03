'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.addAnimalToAlive(this);
  }

  static addAnimalToAlive(animal) {
    Animal.alive.push(animal);
  }

  static removeAnimalFromAlive(diedAnimal) {
    Animal.alive = Animal.alive
      .filter(animal => diedAnimal !== animal);
  }
}

Animal.alive = [];

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
    if (!animal.hidden && !(animal instanceof Carnivore)) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.removeAnimalFromAlive(animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

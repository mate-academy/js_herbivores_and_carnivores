'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.pushAlive(this);
  }

  static pushAlive(animal) {
    Animal.alive.push(animal);
  }

  static removeAnimal(animalDied) {
    Animal.alive
    = Animal.alive.filter(animal => animal.name !== animalDied.name);
  }
}

Animal.alive = [];

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
    const isHerbivore = animal instanceof Herbivore;

    if (isHerbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.removeAnimal(animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

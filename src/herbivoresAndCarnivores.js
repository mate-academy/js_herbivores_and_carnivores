'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

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
    const animalIndex = Animal.alive.indexOf(animal);

    if (animal.hidden === true
      || animal instanceof Carnivore) {
      return;
    }

    animal.health -= 50;

    if (animal.health === 0) {
      Animal.alive.splice(animalIndex, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

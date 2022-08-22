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
  bite(victim) {
    const findAnimal = Animal.alive.find(name => name === victim);
    const animalIndex = Animal.alive.indexOf(findAnimal);

    if (findAnimal.hidden === true
      || findAnimal instanceof Carnivore) {
      return;
    }

    findAnimal.health -= 50;

    if (findAnimal.health === 0) {
      Animal.alive.splice(animalIndex, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

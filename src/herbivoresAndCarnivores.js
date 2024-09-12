'use strict';

class Animal {
  static alive = [];

  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

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
  bite(animalToBite) {
    const isHerbivore = animalToBite instanceof Herbivore;

    if (isHerbivore && !animalToBite.hidden) {
      animalToBite.health -= 50;

      Animal.alive = Animal.alive.filter((animal) => animal.health !== 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

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
  };

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animalToBite) {
    if (animalToBite.hidden === false
      && animalToBite instanceof Herbivore === true) {
      animalToBite.health -= 50;
    }

    Animal.alive = Animal.alive.filter((item) => item.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

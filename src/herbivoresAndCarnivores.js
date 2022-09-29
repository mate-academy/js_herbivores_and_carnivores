'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static died(animal) {
    const diedAnimalIndex = this.alive.indexOf(animal);

    this.alive.splice(diedAnimalIndex, 1);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor() {
    super();
    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  }
};

class Carnivore extends Animal {
  // write your code here
  bite(herbivore) {
    if (!herbivore.hidden && herbivore.hasOwnProperty('hidden')) {
      herbivore.health -= 50;
    }

    Animal.alive = Array.from(new Set(Animal.alive));

    if (herbivore.health === 0) {
      Animal.died(herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

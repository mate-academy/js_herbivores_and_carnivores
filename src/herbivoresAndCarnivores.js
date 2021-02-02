'use strict';

class Animal {
  constructor() {
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  };
};

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;
    };

    if (animal.health === 0) {
      const animalIndex = Animal.alive.indexOf(animal);

      Animal.alive.splice(animalIndex, 1);
    };
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

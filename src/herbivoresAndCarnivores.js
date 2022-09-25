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
  constructor() {
    super(...arguments);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey.hasOwnProperty('hidden') && !prey.hidden) {
      prey.health -= 50;
    }

    if (prey.health === 0) {
      const indexOfAnimal = Animal.alive.indexOf(prey);

      delete Animal.alive[indexOfAnimal];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

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
    if (!(animal instanceof Carnivore)
    && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      const eaten = Animal.alive.findIndex(elem => elem === animal);

      Animal.alive.splice((eaten), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

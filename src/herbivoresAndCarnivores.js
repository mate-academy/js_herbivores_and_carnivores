'use strict';

class Animal {
  constructor() {
    this.health = 100;
    this.hidden = false;

    if (!Animal.alive) {
      Animal.alive = [];
    }

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }

  bite(animal) {
    if (!animal.hidden && !(animal instanceof Carnivore)) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      const thisIndex = Animal.alive.findIndex(e => e === animal);

      Animal.alive.splice(thisIndex, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

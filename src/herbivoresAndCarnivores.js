'use strict';

class Animal {
  constructor() {
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super();
    this.hidden = false;
    this.name = name;
  }

  hide() {
    if (!this.hidden) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }

  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      const index = Animal.alive.indexOf(animal);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  constructor() {
    this.health = 100;
    this.name = '';
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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive.filter(el => el.health === 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

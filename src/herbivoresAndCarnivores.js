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
    this.name = name;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }

  bite(herbivore) {
    if (herbivore.hidden === false) {
      herbivore.health -= 50;

      if (herbivore.health === 0) {
        const ind = Animal.alive.findIndex(x => x === herbivore);

        Animal.alive.splice(ind, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

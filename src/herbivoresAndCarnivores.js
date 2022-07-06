'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor() {
    super();

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if ((herbivore instanceof Herbivore) && !herbivore.hidden) {
      herbivore.health -= 50;

      if (herbivore.health === 0) {
        const index = Animal.alive.lastIndexOf(herbivore);

        Animal.alive.splice(index, 1);
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

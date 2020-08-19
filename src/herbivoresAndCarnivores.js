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
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (!(herbivore instanceof Carnivore) && !herbivore.hidden) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        Animal.alive.pop(Animal.alive.indexOf(herbivore));
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

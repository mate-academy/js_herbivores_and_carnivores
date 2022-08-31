'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(objFromHerbivore) {
    if (objFromHerbivore instanceof Herbivore
      && objFromHerbivore.hidden !== true) {
      objFromHerbivore.health -= 50;
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

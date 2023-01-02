'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
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
  bite(herbivoreObject) {
    if (herbivoreObject.hidden !== undefined && !herbivoreObject.hidden) {
      herbivoreObject.health -= 50;
    }

    if (herbivoreObject.health === 0) {
      const indRemovedAnimal = Animal.alive.findIndex(el => el.health === 0);

      Animal.alive.splice(indRemovedAnimal, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

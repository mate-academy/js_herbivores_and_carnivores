'use strict';

class Animal {
  constructor(name, health) {
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
  bite(herbivore) {
    if (herbivore.hasOwnProperty('hidden') && !herbivore.hidden) {
      herbivore.health -= 50;

      if (herbivore.health === 0) {
        Animal.alive = Animal.alive.filter(animal => animal.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

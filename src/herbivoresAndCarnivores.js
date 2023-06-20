'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }

  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hasOwnProperty('hidden') && !herbivore.hidden) {
      herbivore.health -= 50;
    }

    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }

  constructor(name, health = 100) {
    super(name, health);
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

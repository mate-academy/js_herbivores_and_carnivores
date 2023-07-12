'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

function getAliveAnimals(animals) {
  return animals.filter(animal => animal.health !== 0);
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore && prey.hidden !== true) {
      prey.health -= 50;
    }

    Animal.alive = getAliveAnimals(Animal.alive);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

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
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(objectAnimal) {
    if (objectAnimal instanceof Herbivore && !objectAnimal.hidden) {
      objectAnimal.health -= 50;
    }

    if (objectAnimal.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(objectAnimal), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

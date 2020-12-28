'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
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
  bite(scaryAnimal) {
    if (scaryAnimal.hidden === false) {
      scaryAnimal.health = scaryAnimal.health - 50;

      if (scaryAnimal.health === 0) {
        const deadAnimal = Animal.alive.findIndex(e => e.name === scaryAnimal);

        Animal.alive.splice(deadAnimal, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
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
  bite(herbivoreAnimal) {
    if (herbivoreAnimal.hidden === false) {
      herbivoreAnimal.health -= 50;
    }

    if (herbivoreAnimal.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(herbivoreAnimal, 0), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

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
  bite(herbivoreAnimal) {
    if (herbivoreAnimal instanceof Herbivore && !herbivoreAnimal.hidden) {
      herbivoreAnimal.health -= 50;
    }

    if (herbivoreAnimal.health === 0) {
      Animal.alive = Animal.alive
        .filter(animal => animal.name !== herbivoreAnimal.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

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
  bite(animalName) {
    if (animalName instanceof Herbivore && !animalName.hidden) {
      animalName.health -= 50;
    }

    if (!animalName.health) {
      Animal.alive = Animal.alive.filter(animal => animal !== animalName);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

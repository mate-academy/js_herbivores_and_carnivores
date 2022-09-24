"use strict";

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animalName) {
    if (animalName instanceof Herbivore && !animalName.hidden) {
      animalName.health -= 50;

      if (animalName.health === 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== animalName);
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

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
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (!animal.health) {
        Animal.alive.splice(Animal.alive.findIndex(dino => dino === animal), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

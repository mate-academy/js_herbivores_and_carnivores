'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
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
  bite(HerbivoreAnimalThatWasInjuredByCarnivoresBite) {
    if (!HerbivoreAnimalThatWasInjuredByCarnivoresBite.hidden
      && HerbivoreAnimalThatWasInjuredByCarnivoresBite instanceof Herbivore) {
      HerbivoreAnimalThatWasInjuredByCarnivoresBite.health -= 50;
    }

    if (HerbivoreAnimalThatWasInjuredByCarnivoresBite.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

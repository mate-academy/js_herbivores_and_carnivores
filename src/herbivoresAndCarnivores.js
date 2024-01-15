'use strict';

// Animal class - represents the general characteristics of all animals
class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static uppdateAnimalAlive() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

Animal.alive = [];

// The Herbivore class represents a herbivore animals
class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

// Class Carnivore - represents a predatory animal
class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      Animal.uppdateAnimalAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

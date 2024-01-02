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
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide(hidden) {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      const indexDies = Animal.alive.findIndex(
        objAnimal => objAnimal.health === 0
      );

      Animal.alive.splice(indexDies);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

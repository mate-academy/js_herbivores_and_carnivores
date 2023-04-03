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
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // if we add human it will be Carnivore or Herbivore, Hm....
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden !== true) {
      animal.health -= 50;
    }

    if (!animal.health) {
      Animal.alive = Animal.alive
        .filter(healthyAnimal => healthyAnimal.name !== animal.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

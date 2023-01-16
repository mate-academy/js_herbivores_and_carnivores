'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hidden) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    };

    Animal.alive = Animal.alive.filter(deadAnimal => deadAnimal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

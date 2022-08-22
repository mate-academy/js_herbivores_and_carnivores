'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.aliveAnimals.push(this);
  }
}

Animal.aliveAnimals = [];

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
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    Animal.aliveAnimals = Animal.aliveAnimals.filter(el => el.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

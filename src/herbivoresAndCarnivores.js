'use strict';

class Animal {
  static animal = [];
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.animal.push(this);
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal instanceof Carnivore) && animal.hidden === false) {
      animal.health = animal.health - 50;
      Animal.alive = Animal.alive.filter((e) => e.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

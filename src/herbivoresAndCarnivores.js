'use strict';

class Animal {
  static animals(animal) {
    Animal.alive.push(animal);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.animals(this);
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
  bite(harbivore) {
    if (harbivore instanceof Herbivore && !harbivore.hidden) {
      harbivore.health -= 50;
    }

    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

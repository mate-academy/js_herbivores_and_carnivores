'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

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
    if (animal instanceof Carnivore || animal.hidden === true) {
      return;
    }
    animal.health -= 50;

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((a) => a !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

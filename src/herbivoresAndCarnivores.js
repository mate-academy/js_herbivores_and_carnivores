'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static alive = [];
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden || animal instanceof Carnivore) {
      return;
    }

    animal.health -= 50;

    if (!animal.health) {
      Animal.alive = Animal.alive.filter((herbivore) => herbivore.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

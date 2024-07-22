'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
  }

  removeDead(dead) {
    if (dead.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
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

  canBeBitten() {
    return this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
  }

  bite(animal) {
    if (!(animal instanceof Carnivore) && !animal.canBeBitten()) {
      animal.health -= 50;
      super.removeDead(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

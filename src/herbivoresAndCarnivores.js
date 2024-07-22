'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
  }

  die(dead) {
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
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && !(animal instanceof Carnivore)) {
      animal.health -= 50;
      this.die(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

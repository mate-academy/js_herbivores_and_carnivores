'use strict';

class Animal {
  health = 100;
  static alive = [];

  constructor(name) {
    this.name = name;

    Animal.alive.push(this);
  }

  static filterAnimals() {
    Animal.alive = Animal.alive.filter((el) => el.health > 0);
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
  bite(herbivore) {
    if (!herbivore.hidden && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
      Animal.filterAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

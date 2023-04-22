'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  static killAnimal() {
    Animal.alive = Animal.alive.filter((herbivore) => herbivore.health > 0);
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
  bite(bitten) {
    if (!bitten.hidden && bitten instanceof Herbivore) {
      bitten.health -= 50;

      Animal.killAnimal();
    }

    return this;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

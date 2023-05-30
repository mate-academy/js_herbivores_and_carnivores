'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static deleteDeadAnimal() {
    this.alive = this.alive.filter(animal => animal.health > 0);
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
  bite(beast) {
    if (beast instanceof Herbivore && !beast.hidden) {
      beast.health -= 50;
    }

    if (!beast.health) {
      Animal.deleteDeadAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

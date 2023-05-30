'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
  }

  static removeDeadAnimals() {
    this.alive = this.alive.filter(animal => animal.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (
      !beast.hidden
      && beast instanceof Herbivore
    ) {
      beast.health -= 50;
    }

    if (beast.health <= 0) {
      Animal.removeDeadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

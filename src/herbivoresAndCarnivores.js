'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

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
  bite(animal) {
    const DAMAGE = 50;

    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= DAMAGE;
    }

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter(beast => beast.health !== 0);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;

    Animal.alive.push(this);
  }

  static removeNoAlive() {
    Animal.alive = Animal.alive
      .filter((animal) => animal.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = hidden || false;
  }

  hide(isHide) {
    this.hidden = isHide || true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    const DAMAGE = 50;

    if (!animal.hidden
      && animal instanceof Herbivore) {
      animal.health -= DAMAGE;
    }

    if (!animal.health) {
      Animal.removeNoAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

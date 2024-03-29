'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeDead() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    // eslint-disable-next-line max-len
    if (
      animal instanceof Carnivore ||
      (animal instanceof Herbivore && animal.hidden)
    ) {
      return;
    }
    animal.health -= 50;
    Animal.removeDead();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

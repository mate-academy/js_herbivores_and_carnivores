'use strict';

class Animal {
  static alive = [];
  health = 100;

  constructor(name) {
    this.name = name;
    Animal.init(this);
  }

  static init(obj) {
    this.alive.push(obj);
  }

  static kill(animal) {
    const index = this.alive.indexOf(animal);

    this.alive.splice(index, 1);
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
    const ZERO_HEALTH = 0;
    const HALF_HEALTH = 50;

    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= HALF_HEALTH;
    }

    if (animal.health === ZERO_HEALTH) {
      Carnivore.kill(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

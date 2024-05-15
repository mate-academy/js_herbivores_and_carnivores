'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static removeFromAlive(animal) {
    Animal.alive = Animal.alive.filter((a) => a !== animal);
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

class Carnivore extends Herbivore {
  bite(target) {
    if (
      target instanceof Carnivore ||
      (target.hidden && target instanceof Herbivore)
    ) {
      return;
    }

    target.health -= 50;

    if (target.health <= 0) {
      Animal.removeFromAlive(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

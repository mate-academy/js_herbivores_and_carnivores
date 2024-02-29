'use strict';

class Animal {
  static alive = [];
  health = 100;

  constructor(name) {
    this.name = name;

    Animal.alive.push(this);
  }

  receiveDamage(damage) {
    this.health -= Math.abs(damage);

    if (this.health > 0) {
      return;
    }

    Animal.alive = Animal.alive.filter(animal => animal !== this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  /**
   *
   * @param {Animal} animal
   */
  bite(animal) {
    if (!(animal instanceof Herbivore) || animal.hidden === true) {
      return;
    }

    animal.receiveDamage(50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

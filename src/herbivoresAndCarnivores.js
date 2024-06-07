'use strict';

class Animal {
  health = 100;
  static alive = [];

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  static get alive() {
    return this.alive;
  }
  static set alive(aliveAnimals) {
    this.alive = aliveAnimals;
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target.hidden === false) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

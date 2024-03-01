'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.addAlive(this);
  }

  static addAlive(animal) {
    this.alive.push(animal);
  }

  static removeDead() {
    this.alive = this.alive.filter((elem) => elem.health > 0);
  }
}

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;

      if (victim.health === 0) {
        Animal.removeDead();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

const FULL_HEALTH = 100;
const HALF_HEALTH = 50;

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = FULL_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor() {
    super();

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= HALF_HEALTH;

      if (target.health === 0) {
        const index = Animal.alive.indexOf(target);

        delete Animal.alive[index];
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

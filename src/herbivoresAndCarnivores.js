'use strict';

const DEFAULT_HEALTH = 100;
const DAMAGE = 50;

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = DEFAULT_HEALTH) {
    super(name, health);
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
      target.health -= DAMAGE;

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter(
          (aliveAnimal) => aliveAnimal !== target,
        );
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

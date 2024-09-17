'use strict';

const FULL_HEALTH = 100;
const INJURED_HEALTH = 50;
const DEAD = 0;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = FULL_HEALTH;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= INJURED_HEALTH;

      if (target.health <= DEAD) {
        Animal.alive = Animal.alive.filter(animal => animal !== target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

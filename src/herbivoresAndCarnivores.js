'use strict';

const HEALTH = 100;
const DAMAGE = 50;

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = HEALTH;
    Animal.alive.push(this);
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
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= DAMAGE;
    }

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter((elem) => elem !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

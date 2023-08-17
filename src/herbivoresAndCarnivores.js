'use strict';

const MAX_HEALTH = 100;

class Animal {
  constructor(name, health = MAX_HEALTH) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  static alive = [];

  die() {
    Animal.alive = Animal.alive.filter(animal => animal !== this);
  }
}

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
    if (!target.hidden && target instanceof Herbivore) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      target.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

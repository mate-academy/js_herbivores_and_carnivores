/* eslint-disable no-useless-constructor */
'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  checkHealth() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((a) => a.health > 0);
    }
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
  constructor(name) {
    super(name);
  }

  bite(target) {
    if (target instanceof Carnivore) {
      return;
    }

    if (target.hidden === true) {
      return;
    }

    target.health -= 50;
    target.checkHealth();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

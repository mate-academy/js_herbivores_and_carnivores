'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  static removeDead() {
    Animal.alive = Animal.alive.filter((a) => a.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(target) {
    if (!(target instanceof Herbivore)) {
      return;
    }

    if (target.hidden) {
      return;
    }

    target.health -= 50;

    Animal.removeDead();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

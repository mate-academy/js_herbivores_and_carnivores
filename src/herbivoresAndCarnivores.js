'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((a) => a !== this);
  }

  takeDamage(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
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
  bite(target) {
    if (target instanceof Carnivore) {
      return;
    }

    if (!(target instanceof Herbivore)) {
      return;
    }

    if (target.hidden === true) {
      return;
    }

    target.takeDamage(50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

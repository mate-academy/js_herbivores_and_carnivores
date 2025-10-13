'use strict';

class Animal {
  static alive = [];

  constructor(health, name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  reduceHealth(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(health, name) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!(target instanceof Herbivore)) {
      return;
    }

    if (target.hidden) {
      return;
    }

    target.reduceHealth(50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

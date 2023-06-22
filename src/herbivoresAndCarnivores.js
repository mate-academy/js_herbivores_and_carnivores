'use strict';

const alive = [];

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    alive.push(this);
  }

  decreaseHealth(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    const index = alive.indexOf(this);

    if (index !== -1) {
      alive.splice(index, 1);
    }
  }

  static get alive() {
    return alive;
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
  bite(animal) {
    if (animal instanceof Carnivore || animal.hidden) {
      return;
    }
    animal.decreaseHealth(50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

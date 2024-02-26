'use strict';

const BASE_HEALTH = 100;
const DECREASE_HEALTH = 50;

class Animal {
  constructor(name, health = BASE_HEALTH) {
    this.name = name;
    this._health = health;
    Animal.alive.push(this);
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;

    if (this._health <= 0) {
      this.die();
    }
  }

  decreaseHealth(amount) {
    this.health -= amount;
  }

  die() {
    Animal.alive.splice(Animal.alive.indexOf(this), 1);
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

    return this;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target.hidden || target instanceof Carnivore) {
      return;
    }

    target.decreaseHealth(DECREASE_HEALTH);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

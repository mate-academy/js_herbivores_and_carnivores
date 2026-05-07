'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;

    if (this._health <= 0) {
      Animal.alive = Animal.alive.filter((item) => item !== this);
    }
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
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
      target.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

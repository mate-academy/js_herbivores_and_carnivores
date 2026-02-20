'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    Animal.alive.push(this);
    this.name = name;
    this.health = 100;
  }

  get health() {
    return this._health;
  }

  set health(value) {
    if (!Animal.alive.includes(this)) {
      return;
    }

    this._health = value;

    Animal.alive = Animal.alive.filter((beast) => beast._health > 0);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  #canAttack(beast) {
    if (!(beast instanceof Animal)) {
      return false;
    }

    if (!(beast instanceof Herbivore)) {
      return false;
    }

    if (beast.hidden === true) {
      return false;
    }

    return true;
  }

  bite(target) {
    if (this.#canAttack(target)) {
      target.health -= 50;
    }

    return this;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

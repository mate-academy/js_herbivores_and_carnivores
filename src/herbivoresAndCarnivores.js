'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  set health(value) {
    this._health = value;
    if (this._health <= 0) {
      this._health = 0;
      this.die();
    }
  }

  get health() {
    return this._health;
  }

  die() {
    const index = Animal.alive.indexOf(this);
    if (index !== -1) {
      Animal.alive.splice(index, 1);
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
    if (
      target instanceof Herbivore &&
      !target.hidden
    ) {
      target.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

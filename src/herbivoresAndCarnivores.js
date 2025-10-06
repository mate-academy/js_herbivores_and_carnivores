'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter(a => a !== this);
  }

  set health(value) {
    this._health = value;
    if (this._health <= 0) {
      this.die();
    }
  }

  get health() {
    return this._health;
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (!(victim instanceof Herbivore)) return;
    if (victim.hidden) return;

    victim.health -= 50;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

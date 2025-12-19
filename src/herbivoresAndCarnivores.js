'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this._dead = false;
    this._health = 100;
    this.health = health;

    if (!this._dead) {
      Animal.alive.push(this);
    }
  }

  get health() {
    return this._health;
  }

  set health(value) {
    if (this._dead) {
      return;
    }

    this._health = Math.max(0, Number(value));

    if (this._health <= 0) {
      this.die();
    }
  }

  die() {
    if (this._dead) {
      return;
    }

    this._dead = true;

    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (!(victim instanceof Herbivore)) {
      return;
    }

    if (victim.hidden) {
      return;
    }

    victim.health = victim.health - 50;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

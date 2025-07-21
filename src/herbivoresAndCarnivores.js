'use strict';

class Animal {
  static alive = [];
  #health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  set health(value) {
    this.#health = value;

    if (this.#health <= 0) {
      this.die();
    }
  }

  get health() {
    return this.#health;
  }

  die() {
    Animal.alive = Animal.alive.filter((a) => a !== this);
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
    if (!(target instanceof Herbivore)) {
      return target;
    }

    if (target.hidden) {
      return target;
    }

    target.health -= 50;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

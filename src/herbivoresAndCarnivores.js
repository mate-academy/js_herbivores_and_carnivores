'use strict';

class Animal {
  static alive = [];
  health = 100;

  constructor(name) {
    this.name = name;
  }

  static init(obj) {
    this.alive.push(obj);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;

    Herbivore.init(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Carnivore.init(this);
  }

  bite(victim) {
    const HALF_HEALTH = 50;
    const ZERO_HEALTH = 0;

    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= HALF_HEALTH;
    }

    if (victim.health === ZERO_HEALTH) {
      const index = Carnivore.alive.indexOf(victim);

      Carnivore.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  static alive = [];
  healthLevel = 100;
  hidden = false;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  set health(value) {
    this.healthLevel = value;

    if (this.healthLevel <= 0) {
      const i = Animal.alive.indexOf(this);

      Animal.alive.splice(i, 1);
    }
  }

  get health() {
    return this.healthLevel;
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (!(victim instanceof Carnivore || victim.hidden)) {
      victim.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

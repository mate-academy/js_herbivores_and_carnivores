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
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;
    }

    if (victim.health === 0) {
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

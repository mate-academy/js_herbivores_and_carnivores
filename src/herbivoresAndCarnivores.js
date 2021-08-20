'use strict';

class Animal {
  static alive = [];

  static aliveFilter() {
    this.alive = this.alive.filter(({ health }) => health > 0);
  }

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;
    }

    Animal.aliveFilter();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

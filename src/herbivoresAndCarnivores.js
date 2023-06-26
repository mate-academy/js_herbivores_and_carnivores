'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  updateAlivesList(target) {
    Animal.alive.splice(Animal.alive.indexOf(target), 1);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor() {
    super();

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
    }

    if (!target.health) {
      this.updateAlivesList(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

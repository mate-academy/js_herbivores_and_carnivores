'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
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
    if (target instanceof Carnivore || target.hidden) {
      return '';
    }

    target.health -= 50;

    if (target.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== target);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

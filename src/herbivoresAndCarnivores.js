'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // eslint-disable-next-line constructor-super
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;
    }

    if (victim.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(victim, 1));
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

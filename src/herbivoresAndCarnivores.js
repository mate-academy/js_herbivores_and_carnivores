'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  bite(victim) {
    if (victim.hidden === true || victim instanceof Carnivore) {
      return;
    }
    victim.health -= 50;

    if (victim.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(victim), 1);
    }
  }
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

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
    if (victim instanceof Herbivore && victim.hidden !== true) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      Animal.alive = Animal.alive.filter(item => item !== victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

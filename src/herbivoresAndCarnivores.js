'use strict';

class Animal {
  static alive = [];
  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim.hidden === false) {
      victim.health -= 50;
    }

    if (victim.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

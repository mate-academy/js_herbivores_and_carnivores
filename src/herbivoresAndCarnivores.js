'use strict';

class Animal {
  static addBeast(beast) {
    Animal.alive.push(beast);
  }

  static deleteBeast(beast) {
    Animal.alive = Animal.alive.filter(animal => animal !== beast);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;

    Herbivore.addBeast(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Carnivore.addBeast(this);
  }

  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;
    }

    if (victim.health === 0) {
      Carnivore.deleteBeast(victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  static removeDead() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
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
  bite(victim) {
    if (!victim.hidden && victim instanceof Herbivore) {
      victim.health -= 50;
      Animal.removeDead();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

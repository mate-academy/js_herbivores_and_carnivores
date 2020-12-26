'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.add(this);
  }

  static add(an) {
    this.alive.push(an);
  }

  static remove(an) {
    this.alive.splice(an, 1);
  }
}

Animal.alive = [];

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
    if (!(victim instanceof Carnivore) && victim.hidden !== true) {
      victim.health -= 50;
    }

    if (victim.health === 0) {
      Animal.remove(Animal.alive.findIndex(n => n === victim));
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

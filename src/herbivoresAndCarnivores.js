'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static deadPop() {
    Animal.alive = Animal.alive.filter(el => el.health > 0);
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
  bite(name) {
    if (!name.hidden && name instanceof Herbivore) {
      name.health -= 50;
    }

    if (name.health === 0) {
      Animal.deadPop();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

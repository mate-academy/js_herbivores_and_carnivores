'use strict';

class Animal {
  static alive = [];

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
  bite(beast) {
    if (!beast.hidden && beast instanceof Herbivore) {
      beast.health -= 50;
    }

    if (beast.health === 0) {
      Animal.alive = Animal.alive.filter(creature => creature !== beast);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

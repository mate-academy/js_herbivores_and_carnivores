'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static kill(beast) {
    this.alive.splice(this.alive.indexOf(beast), 1);
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

Animal.alive = [];

class Carnivore extends Animal {
  bite(beast) {
    if (!beast.hidden && beast instanceof Herbivore) {
      beast.health -= 50;

      if (beast.health === 0) {
        Animal.kill(beast);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

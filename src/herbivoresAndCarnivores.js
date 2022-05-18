'use strict';

class Animal {
  health = 100;

  static alive = [];

  static checkAlive() {
    Animal.alive = Animal.alive.filter(beast => beast.health > 0);
  }

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
  // write your code here
  bite(beast) {
    if ((beast.hidden === false) && (beast instanceof Herbivore)) {
      beast.health -= 50;
    }

    Animal.checkAlive();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

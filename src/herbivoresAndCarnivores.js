'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = 100;
  }

  static kill(beast) {
    this.alive.splice(this.alive.indexOf(beast), 1);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

Animal.alive = [];

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(beast) {
    if (beast.hidden !== true && beast instanceof Herbivore) {
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

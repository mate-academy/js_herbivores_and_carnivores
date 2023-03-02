'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  removeDied() {
    Animal.alive.pop();
  };
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
  bite(herb) {
    if (herb instanceof Herbivore && herb.hidden === false) {
      herb.health -= 50;
    }

    if (herb.health === 0) {
      herb.removeDied();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

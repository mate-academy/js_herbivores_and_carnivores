'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast.hidden === false && beast instanceof Herbivore === true) {
      beast.health -= 50;

      for (let i = 0; i < Animal.alive.length; i++) {
        if (Animal.alive[i].health === 0) {
          delete Animal.alive[i];
        }
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

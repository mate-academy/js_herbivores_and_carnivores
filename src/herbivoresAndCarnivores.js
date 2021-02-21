'use strict';

class Animal {
  constructor(beast) {
    this.name = beast;
    this.health = 100;

    Animal.alive.push(this);
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
  bite(beast) {
    if (!beast.hidden && beast instanceof Herbivore) {
      beast.health -= 50;

      if (beast.health === 0 && beast instanceof Herbivore) {
        Animal.alive.splice(Animal.alive.findIndex(
          animal => animal.health === 0
        ), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

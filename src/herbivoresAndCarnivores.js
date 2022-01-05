'use strict';

class Animal {
  constructor(name) {
    this.name = name;
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
    if (beast.hidden === false && beast instanceof Herbivore) {
      beast.health -= 50;

      if (beast.health === 0) {
        Animal.alive = Animal.alive.filter(animal => animal !== beast);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

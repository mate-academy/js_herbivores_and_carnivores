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
    if (beast instanceof Herbivore && !beast.hidden) {
      beast.health -= 50;
    }

    if (!beast.health) {
      Animal.alive.splice(Animal.alive.indexOf(beast), 1);
    }

    return Animal.alive;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

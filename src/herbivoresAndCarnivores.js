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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    const BITE = 50;

    if (beast instanceof Herbivore && !beast.hidden) {
      beast.health -= BITE;
    }

    if (beast.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

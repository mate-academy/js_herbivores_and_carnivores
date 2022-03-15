'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast instanceof Herbivore && beast.hidden === false) {
      beast.health -= 50;
    }

    if (beast.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(beast, 1));
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

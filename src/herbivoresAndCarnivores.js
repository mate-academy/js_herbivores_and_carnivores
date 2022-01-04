'use strict';

class Animal {
  static alive = [];

  health = 100;

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
  bite(beast) {
    if (beast instanceof Herbivore && !beast.hidden) {
      beast.health -= 50;
    }

    if (beast.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(beast), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

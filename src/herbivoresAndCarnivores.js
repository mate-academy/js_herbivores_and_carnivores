'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(...arguments);
    this.hidden = false;
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast instanceof Herbivore && beast.hidden === false) {
      beast.health -= 50;
    }

    if (beast.health === 0) {
      Animal.alive.splice((Animal.alive.indexOf(beast, 0)), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

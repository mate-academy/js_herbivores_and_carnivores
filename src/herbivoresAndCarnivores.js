'use strict';

class Animal {
  constructor(name, healh = 100) {
    this.name = name;
    this.health = healh;

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
    if (beast instanceof Herbivore && !beast.hidden) {
      beast.health -= 50;
      Animal.alive = Animal.alive.filter(fitofag => fitofag.health !== 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

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
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast instanceof Herbivore && !beast.hidden) {
      beast.health -= 50;
    }

    if (beast.health <= 0) {
      const checkName = animal => animal.name !== beast.name;

      Animal.alive = Animal.alive.filter(checkName); ;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

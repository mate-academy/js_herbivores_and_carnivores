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
  bite(herbi) {
    if (herbi instanceof Herbivore && herbi.hidden !== true) {
      herbi.health -= 50;
    }

    if (herbi.health === 0) {
      const indexOfHerbi = Animal.alive.indexOf(herbi);

      Animal.alive.splice(indexOfHerbi, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

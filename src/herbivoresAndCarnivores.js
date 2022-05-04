'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbi) {
    if (!herbi.hidden && herbi instanceof Herbivore) {
      herbi.health -= 50;
    }

    if (herbi.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(herbi.health <= 0, 1));
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

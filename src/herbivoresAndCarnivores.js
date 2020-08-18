'use strict';

class Animal {
  // static alive = [];
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
  bite(herbi) {
    if (herbi.hidden === false) {
      herbi.health -= 50;
    }

    if (herbi.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(herbi), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

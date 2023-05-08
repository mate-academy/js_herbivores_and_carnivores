'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  aliveFilter() {
    Animal.alive = Animal.alive.filter((beast) => beast.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, hiden = false) {
    super(name);
    this.hidden = hiden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && herbivore.hidden !== true) {
      herbivore.health -= 50;
      this.aliveFilter();
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

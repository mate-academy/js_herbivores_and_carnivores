'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
    Animal.alive.push(this);
  }

  bite(herbivore) {
    if (!herbivore.hidden && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health === 0) {
      Animal.alive = Animal.alive.filter(ifDead => ifDead !== herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

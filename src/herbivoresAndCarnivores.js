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
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(live) {
    if (live instanceof Herbivore && !live.hidden) {
      live.health -= 50;
    }

    Animal.alive = Animal.alive.filter(animal => animal.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

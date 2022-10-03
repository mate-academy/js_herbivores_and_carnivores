'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
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
  bite(victum) {
    if (victum instanceof Herbivore && victum.hidden === false) {
      victum.health -= 50;
    }

    if (victum.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(victum), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

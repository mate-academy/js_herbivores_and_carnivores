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
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victum) {
    if (victum instanceof Herbivore && !victum.hidden) {
      victum.health -= 50;
    }

    if (victum.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== victum);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

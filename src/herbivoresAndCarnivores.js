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
  bite(victum) {
    if (victum instanceof Herbivore && !victum.hidden) {
      victum.health -= 50;
    }

    if (victum.health <= 0) {
      Animal.alive = Animal.alive.filter(creature => creature !== victum);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

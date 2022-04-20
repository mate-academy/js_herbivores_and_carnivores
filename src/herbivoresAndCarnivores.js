'use strict';

class Animal {
  get health() {
    return this.healthPoints;
  }
  set health(value) {
    this.healthPoints = value;

    if (this.healthPoints < 1) {
      Animal.alive = Animal.alive.filter(e => e !== this);
    }
  }
  constructor(name) {
    this.name = name;
    this.healthPoints = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  static alive = [];

  static born(beast) {
    this.alive.push(beast);
  }

  static aliveControl(beast) {
    this.alive.find((animal) => {
      if (animal.name === beast.name) {
        animal.health = beast.health;
      }
    });

    this.alive = this.alive.filter(animal => animal.health > 0);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.born(this);
  }
}

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
  bite(beast) {
    if (beast instanceof Herbivore && !beast.hidden) {
      beast.health -= 50;
      Animal.aliveControl(beast);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

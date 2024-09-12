'use strict';

const HEALTH_DEFAULT = 100;
const HEALTH_DECREASED = 50;

class Animal {
  constructor(name, health = HEALTH_DEFAULT) {
    this.name = name;
    this.health = health;
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
  bite(beast) {
    if (!beast.hidden && beast instanceof Herbivore) {
      beast.health -= HEALTH_DECREASED;

      if (beast.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== beast);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

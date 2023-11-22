'use strict';

const HEALTH_DEFAULT = 100;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = HEALTH_DEFAULT;
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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
      Animal.alive = Animal.alive.filter((anml) => anml.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

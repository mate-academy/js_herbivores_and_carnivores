'use strict';
class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}
class Carnivore extends Animal {
  bite(beast) {
    if (beast.hidden === false && beast instanceof Herbivore) {
      beast.health = beast.health - 50;
    }
    Animal.removeDeadAnimals();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

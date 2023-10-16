'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (!herb.hidden && herb instanceof Herbivore) {
      herb.health -= 50;
    }

    if (!herb.health) {
      Animal.alive = Animal.alive.filter(animal => animal !== herb);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

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

  hiden() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  hiden(input) {
    if (input instanceof Herbivore && !input.hidden) {
      input.health -= 50;
    }

    if (input.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health >= 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.hidden = true;
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
  bite(animal) {
    if (animal.hidden) {
      animal.health = 100;
    } else {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(animal), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

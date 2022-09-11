'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

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
  bite(prey) {
    if (!prey.hidden && prey instanceof Herbivore) {
      prey.health -= 50;
    }

    if (prey.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(prey), 1);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

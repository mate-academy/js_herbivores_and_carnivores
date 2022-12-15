'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.alive.indexOf(animal);
      Animal.alive.splice(Animal.alive.indexOf(animal), 1);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

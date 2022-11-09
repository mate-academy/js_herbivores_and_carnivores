'use strict';

class Animal {
  static addAnimal(animal) {
    Animal.alive.push(animal);
  }

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

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(mammal) {
    if (mammal instanceof Herbivore && !mammal.hidden) {
      mammal.health -= 50;
    }

    if (mammal.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== mammal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

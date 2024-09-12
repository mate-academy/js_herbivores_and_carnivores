'use strict';

class Animal {
  static addAnimals(animal) {
    Animal.alive.push(animal);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.addAnimals(this);
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
  bite(herbivore) {
    if (!herbivore.hidden && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

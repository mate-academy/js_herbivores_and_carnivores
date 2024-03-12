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
  constructor(name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbAnimal) {
    if ((herbAnimal instanceof Herbivore) && (!herbAnimal.hidden)) {
      herbAnimal.health -= 50;
    }

    if (herbAnimal.health === 0) {
      Animal.alive = Animal.alive.filter(anml => anml.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

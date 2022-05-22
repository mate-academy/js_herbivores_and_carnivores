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
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animals) {
    if (!animals.hidden && animals instanceof Herbivore) {
      animals.health -= 50;
    }

    if (animals.health <= 0) {
      // Animal.alive.splice(Animal.alive.indexOf(animals), 1);
      Animal.alive = Animal.alive.filter(animal => {
        return animal !== animals;
      });
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

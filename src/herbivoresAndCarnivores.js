'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      const index = Animal.alive.indexOf(animal);

      Animal.alive.splice(index, index);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

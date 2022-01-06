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

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }

    const animalIndex = Animal.alive.findIndex(beast => beast.health === 0);

    Animal.alive.splice(animalIndex, 1);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

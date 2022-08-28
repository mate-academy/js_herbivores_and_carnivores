'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  bite(animal) {
    const indexOfAnimal = Animal.alive.indexOf(animal);

    if (animal.hidden === true || animal instanceof Carnivore) {
      return;
    }

    animal.health -= 50;

    if (animal.health === 0) {
      Animal.alive.splice(indexOfAnimal, 2);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

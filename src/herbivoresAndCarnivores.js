'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
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
    if (animal.constructor === Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      const animalName = Animal.alive.indexOf(died => died.health === 0);

      Animal.alive.splice(animalName, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

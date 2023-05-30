'use strict';
class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);

    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (Object.getPrototypeOf(animal) !== Carnivore.prototype
    && animal.hidden !== true) {
      animal.health -= 50;

      if (animal.health === 0) {
        const animalIndex = Animal.alive.indexOf(animal);

        Animal.alive.splice(animalIndex, 1);
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

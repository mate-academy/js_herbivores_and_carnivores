'use strict';

class Animal {
  static animalArr = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.animalArr.push(this);
  }

  static get alive() {
    return Animal.animalArr;
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
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      Animal.animalArr = Animal.animalArr.filter((specie) => specie.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

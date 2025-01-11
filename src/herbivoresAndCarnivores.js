'use strict';

class Animal {
  static animals = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.animals.push(this);
  }
  static get alive() {
    return Animal.animals;
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
      Animal.animals = Animal.animals.filter((element) => element.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

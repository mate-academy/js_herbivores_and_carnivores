'use strict';

class Animal {
  static animals = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
  static get alive() {
    return Animal.animals.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
    Animal.animals.push(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.animals.push(this);
  }
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

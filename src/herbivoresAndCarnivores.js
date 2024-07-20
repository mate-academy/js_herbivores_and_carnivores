'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }

  static addAnimal(animal) {
    Animal.alive.push(animal);
  }

  static removeAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.addAnimal(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.addAnimal(this);
  }

  bite(animal) {
    if (animal instanceof Carnivore) {
      return;
    }

    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    Animal.removeAnimals();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }

  static newAnimal(animal) {
    Animal.alive.push(animal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);

    this.hidden = hidden;

    Animal.newAnimal(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor() {
    super();
    Animal.newAnimal(this);
  }

  bite(animal) {
    if (!animal.hidden && animal.hasOwnProperty('hidden')) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(item => (item.health > 0));
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

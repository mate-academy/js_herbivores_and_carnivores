"use strict";

class Animal {
  // write your code here

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive.filter((aliveAnimal) => aliveAnimal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

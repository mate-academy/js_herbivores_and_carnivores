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
  hide() {
    this.hidden = !this.hidden;

    return this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false) {
      animal.health = animal.health - 50;
    }

    Animal.alive = Animal.alive.filter(element => element.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

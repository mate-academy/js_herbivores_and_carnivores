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
    this.hidden = true;
  }
}

Herbivore.hidden = false;

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }
    Animal.alive = Animal.alive.filter((el) => el.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

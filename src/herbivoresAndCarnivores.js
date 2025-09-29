'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    this.hidden = false;

    Animal.alive.push(this);
  }

  static removeIfDead(animal) {
    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((a) => a !== animal);
    }
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Carnivore || animal.hidden === true) {
      return;
    }

    animal.health -= 50;
    Animal.removeIfDead(animal);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

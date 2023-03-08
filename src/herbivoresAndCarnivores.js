'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  killAnimal() {
    Animal.alive = Animal.alive.filter(alive => alive !== this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100, visibility = false) {
    super(name, health);
    this.hidden = visibility;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    if (animal.hidden || animal instanceof Carnivore) {
      return;
    }

    animal.health -= 50;

    if (animal.health <= 0) {
      animal.killAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

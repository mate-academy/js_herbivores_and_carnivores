'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

Animal.alive = [];

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (!animal.health) {
      Animal.alive = Animal.alive
        .filter(alive => alive.name !== animal.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

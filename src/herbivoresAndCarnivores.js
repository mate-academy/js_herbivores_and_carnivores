'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (!Animal.alive.includes(this)) {
      Animal.alive.push(this);
    }
  }

  static removeFromAlive(animal) {
    Animal.alive = Animal.alive.filter((a) => a !== animal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
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
    if (
      animal instanceof Carnivore
      || (animal instanceof Herbivore && animal.hidden)
    ) {
      return;
    }

    animal.health -= 50;

    if (animal.health <= 0) {
      Animal.removeFromAlive(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

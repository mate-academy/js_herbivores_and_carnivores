'use strict';

class Animal {
  constructor(health, name) {
    this.health = health;
    this.health = 100;

    this.name = name;

    if (!Animal.alive) {
      Animal.alive = [];
    }
    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter(item => item.health > 0);
    }
  }
}

class Herbivore extends Animal {
  constructor(health, name, hidden) {
    super(health, name);
    this.hidden = hidden || false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

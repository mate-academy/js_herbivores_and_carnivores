'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  // static alive = [];
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;

    return this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false) {
      animal.health = animal.health - 50;
    }

    if (animal.health === 0) {
      const index = Animal.alive.indexOf(animal);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

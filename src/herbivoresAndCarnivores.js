'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(bitedAnimal) {
    if (!(bitedAnimal instanceof Carnivore) && !bitedAnimal.hidden) {
      bitedAnimal.health -= 50;
    }

    if (bitedAnimal.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== bitedAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

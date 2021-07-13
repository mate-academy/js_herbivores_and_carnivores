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
  constructor(name, health, hidden, hide) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health, bite) {
    super(name, health);
    this.hidden = false;
  }

  bite(animalToBite) {
    if (animalToBite instanceof Herbivore && animalToBite.hidden === false) {
      animalToBite.health -= 50;
    }

    if (animalToBite.health === 0) {
      const index = Animal.alive.indexOf(animalToBite);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

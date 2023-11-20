'use strict';

class Animal {
  constructor(name, health = 100, hidden = false) {
    this.name = name;
    this.health = health;
    this.hidden = hidden;

    if (!Animal.alive) {
      Animal.alive = [];
    }

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }

  die() {
    if (Animal.alive) {
      const index = Animal.alive.indexOf(this);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

class Herbivore extends Animal { }

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.constructor.name === 'Herbivore') {
      if (!herbivore.hidden) {
        herbivore.health -= 50;
      }

      if (herbivore.health === 0) {
        herbivore.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

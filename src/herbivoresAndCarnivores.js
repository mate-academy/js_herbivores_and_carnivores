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
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.health && (herbivore.hidden === false)) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      Animal.alive = Animal.alive.filter(
        (animal) => herbivore.name !== animal.name
      );
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

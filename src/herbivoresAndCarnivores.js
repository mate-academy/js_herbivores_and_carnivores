'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }

  die() {
    const index = Animal.alive.findIndex(item => {
      return item === this;
    });

    if (index >= 0) {
      Animal.alive.splice(index, 1);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor() {
    super(arguments);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor() {
    super(arguments);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal instanceof Carnivore || animal.hidden) {
      return;
    };
    animal.health -= 50;

    if (animal.health <= 0) {
      animal.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

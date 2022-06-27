'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Carnivore || prey.hidden) {
      return;
    }

    prey.health -= 50;

    if (!prey.health) {
      Animal.alive = Animal.alive.filter(animal => animal.health);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

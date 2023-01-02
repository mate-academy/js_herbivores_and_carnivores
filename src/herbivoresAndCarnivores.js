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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey.hidden || prey instanceof Carnivore) {
      return;
    }

    prey.health -= 50;

    if (!prey.health) {
      const animals = Animal.alive;

      animals.splice(animals.indexOf(prey), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

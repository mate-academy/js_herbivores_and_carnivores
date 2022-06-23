'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

Animal.alive = [];

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (!animal.health) {
      Animal.alive = Animal.alive.filter(prey => prey.health);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

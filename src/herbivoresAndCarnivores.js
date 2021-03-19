'use strict';

class Animal {
  constructor(name) {
    Animal.alive.push(this);
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;

      return this.hidden;
    }

    this.hidden = false;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      const { alive } = Animal;

      alive.splice(alive.indexOf(animal), 1);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

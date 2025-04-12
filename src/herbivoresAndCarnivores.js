'use strict';

class Animal {
  static alives = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alives.push(this);
  }

  static get alive() {
    return Animal.alives.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Carnivore) {
      return;
    }

    if (animal instanceof Herbivore && animal.hidden) {
      return;
    }

    animal.health -= 50;

    if (animal.health <= 0) {
      Animal.alives = Animal.alives.filter((a) => a !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  static remove() {
    Animal.alive = Animal.alive.filter(animal => animal.health);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hidden) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (!animal.health) {
      Animal.remove();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

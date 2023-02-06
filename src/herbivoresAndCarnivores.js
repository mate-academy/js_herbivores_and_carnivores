'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health, hidden);

    this.hidden = hidden || false;
  }

  hide() {
    if (this.hidden === true) {
      this.hidden = false;
    }

    if (this.hidden === false) {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;

      Animal.alive = Animal.alive.filter(item => item.health > 0);
    }
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  static diedBeast() {
    Animal.alive = Animal.alive.filter((beast) => beast.health > 0);
  }
}

Animal.alive = [];

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
    if (animal && animal.hidden === false) {
      animal.health -= 50;
      Animal.diedBeast();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  static alive = [];

  static filter() {
    this.alive = this.alive.filter((animal) => animal.health > 0);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
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
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore) {
      if (!herbivore.hidden) {
        herbivore.health -= 50;

        Animal.filter();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(animal) {
    if ((animal instanceof Carnivore) === false
      && animal.hidden === false) {
      animal.health -= 50;
    };

    Animal.alive = Animal.alive
      .filter(an => an.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

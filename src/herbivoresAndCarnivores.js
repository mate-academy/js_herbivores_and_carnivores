'use strict';

class Animal {
  static alive = [];

  constructor(health = 100, name) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden, health = 100) {
    super(hidden);
    this.hidden = false;
    this.health = health;
    this.name = name;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100, type = 'carnivore') {
    super(health, name);
    this.health = health;
    this.type = type;
  }

  bite(animal) {
    if (animal.hidden !== true && animal.type !== 'carnivore') {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      animal.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

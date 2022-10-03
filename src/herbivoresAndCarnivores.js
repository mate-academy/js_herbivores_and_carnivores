'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static murder(animal) {
    this.alive = this.alive.filter(beast => beast !== animal);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(beast) {
    if (beast.hidden === false) {
      beast.health -= 50;
    }

    if (beast.health <= 0) {
      Animal.murder(beast);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

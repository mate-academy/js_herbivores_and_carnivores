'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;

    if (this instanceof Animal) {
      Animal.alive.push(this);
    }
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);

    if (this instanceof Animal) {
      Animal.alive.push(this);
    }
  }

  bite(victum) {
    if (!(victum instanceof Carnivore) && victum.hidden === false) {
      victum.health -= 50;

      if (victum.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

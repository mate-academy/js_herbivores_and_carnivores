'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;

    return this.hidden;
  }
}

class Carnivore extends Animal {
  bite(victam) {
    if (victam.hasOwnProperty('hidden') && !victam.hidden) {
      victam.health -= 50;
    }

    if (victam.health <= 0) {
      const index = Animal.alive.indexOf(victam);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

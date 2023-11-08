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
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey.hasOwnProperty('hidden') && !prey.hidden) {
      prey.health -= 50;
    }

    if (prey.health === 0) {
      Animal.alive.pop(this);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

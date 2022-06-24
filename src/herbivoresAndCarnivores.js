'use strict';

class Animal {
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(health, name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(health, name);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore) {
      if (!herbivore.hidden) {
        herbivore.health -= 50;
      }
    }

    this.isAlive();
  }

  isAlive() {
    Animal.alive = Animal.alive.filter(beast => beast.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

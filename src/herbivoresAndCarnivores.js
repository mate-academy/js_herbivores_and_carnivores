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
  constructor(health, name, hidden) {
    super(health, name);

    this.hidden = hidden || false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;
    }

    if (victim.health === 0) {
      Animal.alive = Animal.alive.filter(beast => beast.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

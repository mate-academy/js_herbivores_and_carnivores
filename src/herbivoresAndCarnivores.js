'use strict';

class Animal {
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }

  healthCheck() {
    if (this.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(this), 1);
    }
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

  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;
      victim.healthCheck();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

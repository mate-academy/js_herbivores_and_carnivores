'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.health = 100;
    Animal.alive.push(this);
  }
}

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
  bite(victim) {
    if (victim.hidden === false) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(victim), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

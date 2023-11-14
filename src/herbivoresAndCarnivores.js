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
  bite(victim) {
    if (victim.hidden || victim instanceof Carnivore) {
      return;
    }

    victim.health -= 50;

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

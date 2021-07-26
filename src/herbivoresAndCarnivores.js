'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = `${name}`;
    this.health = health;
    this.hidden = false;
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(victim) {
    if (victim instanceof Herbivore
  && victim.health > 0 && victim.hidden !== true) {
      victim.health -= 50;
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

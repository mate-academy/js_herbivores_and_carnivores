'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    if (!Animal.alive) {
      Animal.alive = [];
    }
    Animal.alive.push(this);
  }

  removeCorpse(name) {
    Animal.alive.splice(
      Animal.alive.findIndex((animal) => animal.name === name) - 1, 1);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    this.type = 'herbivore';
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.type = 'carnivore';
  }
  bite(victim) {
    if (!victim.hidden && victim.type === 'herbivore') {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      victim.removeCorpse(victim.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

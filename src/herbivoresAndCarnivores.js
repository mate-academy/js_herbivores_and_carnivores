'use strict';

const healPoints = require('./healPoints');

class Animal {
  constructor(name) {
    this.name = name;
    this.health = healPoints(100);
    Animal.alive.push(this);
  }

  static removeDiedAmimals() {
    Animal.alive = Animal.alive.filter(aliveAnimal => aliveAnimal.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, damage = 50) {
    super(name);
    this.damage = damage;
  }

  bite(animal) {
    animal instanceof Herbivore && !animal.hidden
      ? animal.health -= this.damage
      : animal.health = this.health;

    if (animal.health <= 0) {
      Animal.removeDiedAmimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

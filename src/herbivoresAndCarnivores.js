/* eslint-disable no-useless-constructor */
'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static deadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health, hidden);
  }

  bite(item) {
    if (item.hidden === false && item instanceof Herbivore) {
      item.health -= 50;
      Animal.deadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

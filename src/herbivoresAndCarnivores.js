'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivor) {
    if (herbivor instanceof Herbivore && herbivor.hidden === false) {
      herbivor.health -= 50;
    }

    if (herbivor.health === 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

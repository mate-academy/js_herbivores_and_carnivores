'use strict';

class Animal {
  // write your code here

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(herbivor) {
    if (herbivor instanceof Herbivore && herbivor.hidden === false) {
      herbivor.health -= 50;
    }

    if (herbivor.health === 0) {
      Animal.alive = Animal.alive.filter(a => a.name !== herbivor.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

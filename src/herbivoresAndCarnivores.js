'use strict';

class Animal {
  // write your code here
  constructor(name, health) {
    this.health = health || 100;
    this.name = name;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health, hidden) {
    super(name, health);

    this.hidden = hidden || false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(target) {
    if (target.hidden === false) {
      target.health -= 50;
    }

    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

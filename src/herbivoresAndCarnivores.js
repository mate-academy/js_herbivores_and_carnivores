'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.isCarnivore = true;
  }
  bite(animal) {
    if (!animal.isCarnivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (!animal.health) {
      Animal.alive = Animal.alive.filter(alive => alive.health);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

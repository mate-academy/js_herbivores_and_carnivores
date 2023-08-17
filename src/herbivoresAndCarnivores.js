'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.health = 100;
    this.name = name;

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
  bite(prey) {
    if (prey.hidden || prey instanceof Carnivore) {
      return;
    }

    prey.health -= 50;

    if (prey.health === 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

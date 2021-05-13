'use strict';

class Animal {
  // write your code here

  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(prey) {
    if (prey.hidden === false) {
      prey.health -= 50;
    }

    if (prey.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(prey), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

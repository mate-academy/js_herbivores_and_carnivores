'use strict';

class Animal {
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
    this.hidden = this.hidden === false;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(name) {
    if (name.hidden !== true && name instanceof Herbivore) {
      name.health -= 50;

      if (name.health === 0) {
        Animal.alive = Animal.alive.filter(x => x !== name);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

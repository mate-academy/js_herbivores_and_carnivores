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
  bite(wounded) {
    if (wounded instanceof Herbivore && wounded.hidden === false) {
      wounded.health -= 50;
    }

    if (wounded.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(wounded), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

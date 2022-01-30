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

  bite(herb) {
    if (!herb.hidden && herb instanceof Herbivore === true) {
      herb.health - 50 !== 0
        ? herb.health -= 50
        : delete Animal.alive.splice(herb);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

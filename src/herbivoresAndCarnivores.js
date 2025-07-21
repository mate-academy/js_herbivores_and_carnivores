'use strict';

class Animal {
  // write your code here
  health = 100;
  static all = [];

  static get alive() {
    return Animal.all.filter((x) => x.health > 0);
  }

  constructor(name) {
    this.name = name;
    Animal.all.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here

  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(herb) {
    if (herb.hidden === false && herb instanceof Herbivore) {
      herb.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

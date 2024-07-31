'use strict';

class Animal {
  // write your code here
  constructor() {
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super();
    this.name = name;
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super();
    this.name = name;
  }

  bite(herb) {
    if (!herb.hidden && !(herb instanceof Carnivore)) {
      herb.health -= 50;

      if (herb.health <= 0) {
        const i = Animal.alive.indexOf(herb);

        Animal.alive.splice(i, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

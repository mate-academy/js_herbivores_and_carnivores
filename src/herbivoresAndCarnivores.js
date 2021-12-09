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
    if (this.hidden !== true) {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herb) {
    if (herb.__proto__ !== Carnivore.prototype && herb.hidden === false) {
      herb.health -= 50;
    }

    if (herb.health <= 0) {
      const index = Animal.alive.indexOf(herb);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

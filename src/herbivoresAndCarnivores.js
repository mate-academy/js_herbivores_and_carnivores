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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(herb) {
    if (!herb.hidden && herb instanceof Herbivore) {
      const el = Animal.alive.indexOf(herb);

      herb.health - 50 !== 0
        ? herb.health -= 50
        : Animal.alive.splice(el, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

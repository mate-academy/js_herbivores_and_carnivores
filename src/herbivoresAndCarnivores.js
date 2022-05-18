'use strict';

class Animal {
  // write your code here
  health = 100;

  constructor(name) {
    // this = {}
    // this.__proto__ = Animal.prototype
    // this.health = 100
    this.name = name;
    Animal.alive.push(this);
    // return this
  }

  static alive = [];
}

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
  bite(somebody) {
    if ((somebody instanceof Herbivore)
     && (somebody.hidden === false) && Animal.alive.includes(somebody)) {
      somebody.health -= 50;

      Animal.alive = Animal.alive.filter(animal => animal.health <= 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

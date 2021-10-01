'use strict';

class Animal {
  // write your code here
  // static alive = []; /* Parsing error: Unexpected token = */

  static AliveArr() {
    this.alive = this.alive.filter(animal => animal.health > 0);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, hide) {
    super(name);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (!(animal instanceof Carnivore) && animal.hidden === false) {
      animal.health -= 50;

      Animal.AliveArr();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

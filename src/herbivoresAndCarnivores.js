'use strict';

class Animal {
  // write your code here
  health = 100;
  static alive = [];

  constructor(name) {
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }
    Animal.alive = Animal.alive.filter(beast => beast.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

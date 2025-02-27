'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
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
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;

      Animal.alive = Animal.alive.filter((creature) => creature.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

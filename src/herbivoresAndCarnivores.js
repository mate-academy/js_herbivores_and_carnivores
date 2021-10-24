"use strict";
class Animal {
  // write your code here

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
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
  bite(animal) {
    if (animal instanceof Carnivore || animal.hidden === true) {
      return;
    }

    if (animal.health === 100) {
      animal.health = 50;

      return;
    }

    Animal.alive = Animal.alive.filter((el) => el.name !== animal.name);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

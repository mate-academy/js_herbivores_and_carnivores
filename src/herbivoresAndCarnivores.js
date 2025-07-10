'use strict';

class Animal {
  // write your code here
  static alive = [];
  health = 100;

  constructor() {
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  hidden = false;

  constructor(name) {
    super();
    this.name = name;
  }

  hide() {
    this.hidden = true;
  }

  unhide() {
    this.hidden = false;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super();
    this.name = name;
  }

  bite(animal) {
    if (animal instanceof Herbivore) {
      if (!animal.hidden) {
        animal.health -= 50;

        if (animal.health <= 0) {
          Animal.alive = Animal.alive.filter((a) => a !== animal);
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

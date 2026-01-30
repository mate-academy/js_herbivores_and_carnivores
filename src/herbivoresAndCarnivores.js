'use strict';

class Animal {
  static alive = [];

  name;
  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
  // write your code here
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
  // write your code here
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal instanceof Herbivore)) {
      return;
    }

    if (animal.hidden) {
      return;
    }

    animal.health -= 50;

    if (animal.health <= 0) {
      const index = Animal.alive.indexOf(animal);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
  // write your code here
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

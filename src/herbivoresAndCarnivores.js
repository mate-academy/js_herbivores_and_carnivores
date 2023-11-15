'use strict';

class Animal {
  // write your code here
  static alive = [];

  health = 100;

  constructor(name) {
    this.name = name;
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);

    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (!animal.hidden && !(animal instanceof Carnivore)) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(animal), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

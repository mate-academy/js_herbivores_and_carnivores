'use strict';

class Animal {
  // write your code here
  static alive = [];

  static filterOfAlive() {
    this.alive = this.alive.filter(({ health }) => health > 0);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }
    Animal.filterOfAlive();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

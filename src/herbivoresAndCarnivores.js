'use strict';

class Animal {
  // write your code here
  static removeDead() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
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
  constructor(name) {
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
    if (!animal.hidden && !(animal instanceof Carnivore)) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.removeDead();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

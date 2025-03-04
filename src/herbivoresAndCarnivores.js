'use strict';

class Animal {
  static alive = [];
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
  }

  // write your code here
}

class Herbivore extends Animal {
  constructor(name) {
    super(100, name);
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true;
  }
  // write your code here
}

class Carnivore extends Animal {
  constructor(name) {
    super(100, name);
    Animal.alive.push(this);
  }
  bite(animal) {
    if (animal.hidden === false && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive.filter((beast) => beast.health > 0);
  }
  // write your code here
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

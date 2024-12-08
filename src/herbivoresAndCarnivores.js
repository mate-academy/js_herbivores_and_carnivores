'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  static updateAlive() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

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
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;
      Animal.updateAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

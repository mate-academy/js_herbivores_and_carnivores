'use strict';

class Animal {
  static alive = [];
  constructor(name, health) {
    this.health = health || 100;
    this.name = name;
    Animal.alive.push(this);
  }
  static updateAlive() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);

    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(harbivore) {
    if (!harbivore.hidden && harbivore instanceof Herbivore) {
      harbivore.health -= 50;
    }
    Animal.updateAlive();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

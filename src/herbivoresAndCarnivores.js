'use strict';

class Animal {
  static nature() {
    this.alive = this.alive.filter((dead) =>
      dead.health !== 0);
  }
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100, toHide = false) {
    super(name, health);
    this.hidden = toHide;

    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);

    Animal.alive.push(this);
  }
  bite(mammal) {
    if (mammal.hidden === false) {
      mammal.health -= 50;

      if (mammal.health === 0) {
        Animal.nature();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

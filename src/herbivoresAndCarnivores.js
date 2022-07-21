'use strict';

class Animal {
  // write your code here

  constructor(health, name) {
    this.health = health || 100;
    this.name = name;

    Animal.add();
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(health, name) {
    super(health, name);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(health, name) {
    super(health, name);

    this.hidden = false;
  }

  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
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
  // write your code here
  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden !== true) {
      victim.health -= 50;

      if (victim.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== victim);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

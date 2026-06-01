'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  // write your code here
}

class Herbivore extends Animal {
  constructor(name, hidden) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
  // write your code here
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && target.hidden !== true) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
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

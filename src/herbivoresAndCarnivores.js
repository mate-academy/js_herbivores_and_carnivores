'use strict';

class Animal {
  // write your code here

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
  bite(enemy) {
    if (enemy.hidden === false && enemy instanceof Herbivore) {
      enemy.health -= 50;

      if (enemy.health === 0) {
        Animal.alive = Animal.alive.filter(el => el !== enemy);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  // write your code here

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }

  static update() {
    this.alive = this.alive.filter(({ health }) => health);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = hidden || false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(target) {
    if (!(target instanceof Carnivore) && target.hidden === false) {
      target.health -= 50;
      Animal.update();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

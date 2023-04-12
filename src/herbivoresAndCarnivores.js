'use strict';

class Animal {
  // write your code here

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static update() {
    this.alive = this.alive.filter(({ health }) => health);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(target) {
    if (!(target instanceof Carnivore) && !target.hidden) {
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

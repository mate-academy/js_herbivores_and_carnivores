'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(health = 100, name, hidden = false) {
    super(health, name);
    this.health = 100;
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(health = 100, name) {
    super(health, name);
    this.health = 100;
  }
  bite(target) {
    if (!(target instanceof Herbivore) || target.hidden) {
      return;
    }
    target.health -= 50;

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

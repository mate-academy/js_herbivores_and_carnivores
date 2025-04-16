'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  die() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(health = 100, name) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(health = 100, name) {
    super(health, name);
  }

  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden && victim.health > 0) {
      victim.health -= 50;
      victim.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

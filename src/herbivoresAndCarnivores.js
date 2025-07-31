'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  static alive = [];

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

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

  bite(victim) {
    if (!(victim instanceof Herbivore)) {
      return;
    }

    if (victim.hidden) {
      return;
    }
    victim.health -= 50;

    if (victim.health <= 0) {
      victim.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

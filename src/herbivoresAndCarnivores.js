'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static alive = [];

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }

  chechHealth() {
    if (this.health <= 0) {
      this.die();
    }
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

  bite(target) {
    if (target instanceof Herbivore && !target.hidden && target.health > 0) {
      target.health -= 50;
      target.chechHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

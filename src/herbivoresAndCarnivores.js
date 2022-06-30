'use strict';

class Animal {
  static nature() {
    this.alive = this.alive.filter((dead) =>
      dead.health !== 0);
  }
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;

    Animal.alive.push(this);
  }
  hide() {
    if (this.hidden !== undefined) {
      this.hidden = this.hidden === false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);

    Animal.alive.push(this);
  }
  bite(victim) {
    if (victim.hidden === false || undefined) {
      victim.health -= 50;

      if (victim.health === 0) {
        Animal.nature();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
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
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      target.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

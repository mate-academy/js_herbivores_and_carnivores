'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }
}

Animal.alive = [];

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
  bite(target) {
    if (target instanceof Carnivore || target.hidden) {
      return;
    }

    target.health -= 50;

    if (target.health < 1) {
      Animal.alive = Animal.alive.filter((item) => item.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

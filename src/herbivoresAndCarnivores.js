'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  decreaseHealth() {
    this.health -= 50;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Carnivore || target.hidden) {
    } else {
      target.decreaseHealth();
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

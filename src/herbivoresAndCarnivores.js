'use strict';

class Animal {
  checkHealth() {
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
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Carnivore) {
      return;
    }

    if (target.hidden) {
      return;
    }
    target.health -= 50;
    target.checkHealth();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

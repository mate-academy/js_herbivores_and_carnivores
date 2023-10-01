'use strict';

class Animal {
  addToAlive() {
    Animal.alive.push(this);
  }

  removeFromAlive() {
    Animal.alive = Animal.alive.filter(a => a !== this);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.addToAlive(this);
  }
}
// static array doesn't work in this node version
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      target.removeFromAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

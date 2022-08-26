'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
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
    const indexOfTarget = Animal.alive.indexOf(target);

    if (target.hidden === false) {
      target.health -= 50;
    }

    if (target.health === 0) {
      Animal.alive.splice(indexOfTarget, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

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
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = !(this.hidden);
  }
};

class Carnivore extends Animal {
  bite(target) {
    if (target.hidden === false) {
      target.health = target.health - 50;
    }

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter(
        (isAlive) => isAlive.name !== target.name);
    }

    return target;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

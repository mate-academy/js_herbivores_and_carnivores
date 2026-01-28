'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100, hidden) {
    this.name = name;
    this.health = health;
    this.hidden = hidden || false;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden) {
    super(name, health, hidden);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100, hidden) {
    super(name, health, hidden);
  }

  bite(target) {
    if (target instanceof Carnivore || target.hidden) {
      return;
    }

    target.health -= 50;

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter((el) => el !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(target) {
    if (target instanceof Carnivore) {
      return;
    }

    if (target.hidden === true) {
      return;
    }

    target.health -= 50;

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter((a) => a !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

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
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = false;

    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((a) => a !== this);
    }
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((a) => a !== this);
    }
  }

  bite(victim) {
    if (
      victim instanceof Herbivore &&
      victim.hidden === false &&
      victim.health > 0
    ) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      Animal.alive = Animal.alive.filter((a) => a !== victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

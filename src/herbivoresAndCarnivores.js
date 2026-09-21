'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    // Try to add animal into the beasts list
    this.addBeast(this);
  }

  // Every animal with positive hp will be added to alive list
  addBeast(beast) {
    if (this.health > 0) {
      Animal.alive.push(beast);
    }
  }

  // Deletes killed or incorrect declarated animals from beasts list
  deleteBeast(beast) {
    Animal.alive = Animal.alive.filter((a) => a !== beast);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden) {
    super(name, health, hidden);

    this.name = name;
    this.health = health;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    this.name = name;
    this.health = health;
  }

  bite(victim) {
    if (!(victim instanceof Carnivore) && victim.hidden !== true) {
      victim.health -= 50;

      if (victim.health <= 0) {
        this.deleteBeast(victim);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

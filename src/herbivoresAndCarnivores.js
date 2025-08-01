'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;

    // Add this animal to the alive array when created
    Animal.alive.push(this);
  }

  // Method to handle death and removal from alive array
  die() {
    const index = Animal.alive.indexOf(this);

    if (index > -1) {
      Animal.alive.splice(index, 1);
    }
  }

  // Check if animal should die after health changes
  checkHealth() {
    if (this.health <= 0) {
      this.die();
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
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
    // Check if target is a herbivore and not hidden
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
      target.checkHealth(); // Check if the herbivore dies
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

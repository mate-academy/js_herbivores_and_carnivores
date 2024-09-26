'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
    Animal.filterAlive();
  }

  static alive = [];

  static filterAlive() {
    Animal.alive = Animal.alive.filter((a) => a.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true; // Set hidden to true when hiding
  }
}

class Carnivore extends Animal {
  bite(creature) {
    if (creature instanceof Herbivore && !creature.hidden) {
      creature.health -= 50;
    }

    Animal.filterAlive();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

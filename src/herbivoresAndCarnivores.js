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
  constructor(name, health = 100, hidden) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    // Checklist 3 - No Toggle, only changes to True
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(beast) {
    if (beast.hidden !== undefined // cheeky way to check for carnivore
        && beast.hidden !== true) {
      beast.health -= 50;

      if (beast.health <= 0) {
        // Checklist 1/2 - Splice/IndexOf replaced by Filter
        Animal.alive = Animal.alive.filter(el => el !== beast);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

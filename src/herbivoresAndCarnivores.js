'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    if (!Animal.alive) {
      Animal.alive = [];
    } else {
      Animal.alive.push(this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.isCarnivore = true;
  }

  bite(animal) {
    if (!animal.hidden && !animal.isCarnivore) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive.filter(an => an.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = (!this.hidden);
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }
  bite(herb) {
    if (herb.hidden === true || herb instanceof Carnivore) {
      return;
    }
    herb.health -= 50;
    if (herb.health <= 0) {
      Animal.alive = Animal.alive.filter(x => x !== herb);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

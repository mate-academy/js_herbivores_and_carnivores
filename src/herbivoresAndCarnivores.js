'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (herb instanceof Herbivore && herb.hidden !== true) {
      herb.health -= 50;
    }

    if (herb.health === 0) {
      return Animal.alive.splice(herb);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

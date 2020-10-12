'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (this.health !== 0) {
      Animal.alive.push(this);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herb) {
    if (!herb.hidden && herb instanceof Herbivore) {
      herb.health = herb.health - 50;
    }

    if (herb.health === 0) {
      const idx = Animal.alive.findIndex(animal => animal.health === 0);

      if (idx !== -1) {
        Animal.alive.splice(idx, 1);
      }
    }
  }
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

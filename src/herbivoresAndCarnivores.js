'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;

    Animal.alive.push(this);
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }

  decreaseHealth(amount) {
    this.health = Math.max(0, this.health - amount);

    if (this.health === 0) {
      this.die();
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(h) {
    if (h.hidden || h instanceof Carnivore) {
      return;
    }
    h.decreaseHealth(50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

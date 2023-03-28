'use strict';

class Animal {
  constructor(health, name) {
    this.health = health;
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(health, name, hidden) {
    super(health, name);
    this.hidden = hidden;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victum) {
    if (victum.hidden === false) {
      victum.health -= 50;
    }

    if (victum.health === 0) {
      Animal.alive.pop();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

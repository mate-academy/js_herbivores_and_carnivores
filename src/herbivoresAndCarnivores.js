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
  constructor(health, name, hidden = false) {
    super(health, name);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(arg) {
    if (arg instanceof Herbivore && !arg.hidden) {
      arg.health -= 50;
    }

    Animal.alive = Animal.alive.filter(item => item.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

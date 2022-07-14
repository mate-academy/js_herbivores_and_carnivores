'use strict';

class Animal {
  // static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(variable) {
    if (variable.hidden === false && variable instanceof Herbivore) {
      variable.health -= 50;
    }

    Animal.alive = Animal.alive.filter(dead => dead.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

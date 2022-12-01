'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(target) {
    if (target.hidden === false) {
      target.health -= 50;
    }

    if (target.health === 0) {
      Animal.alive.pop(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

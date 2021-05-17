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
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide(hidden) {
    this.hidden = !hidden;
  }
}

class Carnivore extends Animal {
  bite(obj) {
    if (obj instanceof Carnivore || obj.hidden) {
      return;
    }

    obj.health -= 50;

    Animal.alive = Animal.alive.filter(beast => beast.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

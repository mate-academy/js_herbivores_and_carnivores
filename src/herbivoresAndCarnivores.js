'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  constructor(name, health, biten) {
    super(name, health);

    this.biten = biten;
  }

  bite(object) {
    if (!object.hidden && object instanceof Herbivore) {
      object.health -= 50;
    }

    Animal.alive = Animal.alive.filter(item => item.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

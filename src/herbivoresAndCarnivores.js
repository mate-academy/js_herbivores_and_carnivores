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
  constructor(name, health, hidden = true) {
    super(name, health);

    this.hidden = hidden;
  }

  bite(target) {
    if (Herbivore && !target.hidden) {
      target.health -= 50;
    }

    Animal.alive = Animal.alive.filter((a) => a.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

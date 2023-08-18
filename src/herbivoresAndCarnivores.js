'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push((this));
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    const isHerbivore = victim instanceof Herbivore;

    if (!victim.hidden
      && isHerbivore) {
      victim.health -= 50;
    }

    if (victim.health > 0) {
      return;
    }

    Animal.alive = Animal.alive
      .filter((animal) => animal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

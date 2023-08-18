'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = Animal.INITIAL_HEALTH;
    Animal.alive.push((this));
  };
}

Animal.alive = [];
Animal.INITIAL_HEALTH = 100;
Animal.AFTER_VUCTIM_HEALTH = 50;

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

    if (!victim.hidden && isHerbivore) {
      victim.health -= Animal.AFTER_VUCTIM_HEALTH;
    }

    if (victim.health <= 0) {
      Animal.alive = Animal.alive
        .filter((animal) => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

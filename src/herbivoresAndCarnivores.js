'use strict';

class Animal {
  static alive = [];
  static MAX_HEALTH = 100;
  static MIN_HEALTH = 50;

  constructor(name, health = Animal.MAX_HEALTH) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= Animal.MIN_HEALTH;

      if (victim.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

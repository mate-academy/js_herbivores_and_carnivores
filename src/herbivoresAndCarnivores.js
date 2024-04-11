'use strict';

class Animal {
  static alive = [];
  static DEFAULT_AMOUNT_OF_HEALTH = 100;

  health = Animal.DEFAULT_AMOUNT_OF_HEALTH;

  constructor(name) {
    this.name = name;
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
  static DAMAGE_FROM_BITE = 50;

  bite(herbivore) {
    if (!(herbivore instanceof Herbivore) || herbivore.hidden) {
      return;
    }

    herbivore.health -= Carnivore.DAMAGE_FROM_BITE;
    Animal.alive = Animal.alive.filter((animalAlive) => animalAlive.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

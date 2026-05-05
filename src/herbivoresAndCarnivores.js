'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;

    Animal.alive.push(this);
  }

  health = 100;

  takingDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      Animal.alive.splice(
        Animal.alive.findIndex((el) => el === this),
        1,
      );
    }
  }
}

class Herbivore extends Animal {
  hidden = false;
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(opponent) {
    if (opponent instanceof Carnivore) {
      return;
    }

    if (opponent.hidden === true) {
      return;
    }

    opponent.takingDamage(50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

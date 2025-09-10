'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
  die() {
    Animal.alive = Animal.alive.filter((a) => a.health > 0);
  }
}

class Herbivore extends Animal {
  hidden = false;
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (
      herbivore instanceof Herbivore &&
      herbivore.hidden !== true &&
      herbivore.health > 0
    ) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        herbivore.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

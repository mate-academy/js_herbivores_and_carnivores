'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  die() {
    const idx = Animal.alive.indexOf(this);

    if (idx !== -1) {
      Animal.alive.splice(idx, 1);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (!(victim instanceof Herbivore)) {
      return;
    }

    if (victim.hidden) {
      return;
    }

    victim.health -= 50;

    if (victim.health <= 0) {
      victim.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

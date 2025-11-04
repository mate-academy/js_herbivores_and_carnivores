'use strict';

class Animal {
  static alive = [];

  health = 100;

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
  bite(victim) {
    if (!victim.hidden && victim instanceof Herbivore) {
      victim.health -= 50;
    }

    const onlyAlive = Animal.alive.filter((animal) => animal.health > 0);

    Animal.alive = onlyAlive;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

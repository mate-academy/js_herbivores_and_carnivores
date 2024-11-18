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
    if (
      victim instanceof Herbivore === true &&
      victim.health > 0 &&
      victim.hidden === false
    ) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      const index = Animal.alive.indexOf(victim);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

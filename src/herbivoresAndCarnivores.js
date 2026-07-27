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
    if (victim.hidden === false && victim.Prototype !== 'Carnivore') {
      victim.health -= 50;

      if (victim.health <= 0) {
        Animal.alive = Animal.alive.filter((x) => x !== victim);
      }
    } else {
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

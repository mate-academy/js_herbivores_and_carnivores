'use strict';

class Animal {
  static alive = [];

  static birth(animal) {
    this.alive.push(animal);
  }

  static death(animal) {
    this.alive.splice(this.alive.indexOf(animal), 1);
  }

  health = 100;

  constructor(name) {
    this.name = name;
    Animal.birth(this);
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
    if (!(victim instanceof Carnivore) && !victim.hidden) {
      victim.health -= 50;

      if (victim.health <= 0) {
        Animal.death(victim);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

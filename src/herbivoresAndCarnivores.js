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
  bite(herb) {
    if (['hidden'] in herb) {

      if (!herb.hidden) {
        herb.health -= 50;

        if (herb.health <= 0) {
          Animal.alive.splice(Animal.alive.indexOf(herb), 1);
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

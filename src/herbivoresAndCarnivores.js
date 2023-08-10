'use strict';

class Animal {
/* eslint-disable */
  static alive = [];
  /* eslint-enable */
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

  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
      if (animal.health === 0) {
        Animal.alive.splice(Animal.alive.indexOf(animal), 1)
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

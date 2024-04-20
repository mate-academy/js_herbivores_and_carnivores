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
  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;

      if (animal.health === 0) {
        Animal.alive = Animal.alive.filter((beast) => beast !== animal);
        /* const index = Animal.alive.indexOf(animal);

        Animal.alive.splice(index, 1); */
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

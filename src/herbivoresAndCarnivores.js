'use strict';

class Animal {
  static alive = [];
  name = '';
  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  static alive = [];
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore) {
      const indexOfHerbivore = Animal.alive.findIndex((animal) => {
        return animal === herbivore && animal.hidden === false;
      });

      if (indexOfHerbivore !== -1) {
        Animal.alive[indexOfHerbivore].health -= 50;
        Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

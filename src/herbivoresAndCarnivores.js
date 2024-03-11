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
  bite(someHerbivore) {
    if (
      typeof someHerbivore === 'object' &&
      someHerbivore instanceof Herbivore &&
      someHerbivore.hidden === false
    ) {
      someHerbivore.health -= 50;

      if (someHerbivore.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(someHerbivore), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

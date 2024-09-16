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
  bite(canrivore) {
    if (canrivore instanceof Herbivore && !canrivore.hidden) {
      canrivore.health -= 50;

      if (canrivore.health === 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== canrivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  health = 100;
  static alive = [];

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
    if (herb instanceof Herbivore && !herb.hidden) {
      herb.health -= 50;

      if (herb.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== herb);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

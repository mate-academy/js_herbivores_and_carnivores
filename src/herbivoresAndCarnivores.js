'use strict';

class Animal {
  static alive = [];

  static born(beast) {
    this.alive.push(beast);
  }

  static aliveControl(beast) {
    this.alive.find((animal) => {
      if (animal.name === beast.name) {
        animal.health = beast.health;
      }
    });

    this.alive = this.alive.filter(animal => animal.health > 0);
  }

  health = 100;

  constructor(name) {
    this.name = name;
    Animal.born(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast instanceof Herbivore && beast.hidden === false) {
      beast.health -= 50;
      Animal.aliveControl(beast);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

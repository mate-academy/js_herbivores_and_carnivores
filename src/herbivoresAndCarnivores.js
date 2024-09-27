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
    const biteForce = 50;

    if (animal instanceof Herbivore && animal.hidden !== true) {
      animal.health -= biteForce;
      Animal.alive = Animal.alive.filter(beast => beast.health);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

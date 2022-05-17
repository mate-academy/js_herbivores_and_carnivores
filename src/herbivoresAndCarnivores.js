'use strict';

class Animal {
  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  static alive = [];

  static checkAlive() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if ((animal.hidden === false) && (animal instanceof Herbivore)) {
      animal.health -= 50;
    }

    Animal.checkAlive();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

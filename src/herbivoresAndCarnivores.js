'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }
    Animal.alive = Animal.alive.filter(alive => alive.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

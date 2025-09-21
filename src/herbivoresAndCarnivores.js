'use strict';

class Animal {
  health = 100;
  static alive = [];

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  static die(animal) {
    Animal.alive.splice(Animal.alive.indexOf(animal), 1);
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
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.die(animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

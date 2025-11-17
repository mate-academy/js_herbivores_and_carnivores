'use strict';

class Animal {
  health = 100;

  static alive = [];

  static removeAnimal(animalToRemove) {
    Animal.alive = Animal.alive.filter((elem) => elem !== animalToRemove);
  }

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
  bite(victim) {
    if (!victim?.hidden && victim instanceof Herbivore) {
      victim.health -= 50;

      if (victim.health <= 0) {
        Animal.removeAnimal(victim);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

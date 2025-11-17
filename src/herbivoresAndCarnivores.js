'use strict';

class Animal {
  health = 100;

  static alive = [];

  static removeAnimal(animalToRemove) {
    const index = Animal.alive.indexOf(animalToRemove);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
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

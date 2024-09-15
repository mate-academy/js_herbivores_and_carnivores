'use strict';

class Animal {
  static alive = [];
  static removeAnimal(animalToRemove) {
    const animalIndex = Animal.alive.findIndex(
      (animal) => animal === animalToRemove,
    );

    Animal.alive.splice(animalIndex, 1);
  }
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
  bite(target) {
    if (target instanceof Herbivore && target.hidden !== true) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.removeAnimal(target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

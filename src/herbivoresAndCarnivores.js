'use strict';

class Animal {
  static alive = [];

  constructor(animal, health) {
    this.animal = animal;
    this.health = health || 100;

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
    let isTargetAnimalDead = false;

    if (animal instanceof Herbivore) {
      if (!animal.hidden) {
        animal.health -= 50;

        if (animal.health <= 0) {
          isTargetAnimalDead = true;
        }
      }
    }

    if (isTargetAnimalDead) {
      Animal.alive = Animal.alive.filter((item) => {
        return item !== animal;
      });
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

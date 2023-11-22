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
  bite(targetAnimal) {
    if (targetAnimal.hidden === false && targetAnimal instanceof Herbivore) {
      targetAnimal.health -= 50;
    }

    if (targetAnimal.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(targetAnimal), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

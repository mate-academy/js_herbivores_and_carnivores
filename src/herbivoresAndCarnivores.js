'use strict';

class Animal {
  static ANIMAL_HEALTH = 100;
  static DESCREASE_HEALTH = 50;

  constructor(name, health = Animal.ANIMAL_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  static alive = [];

  static checkHealth(animal) {
    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((animalInd) => animalInd !== animal);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (herb instanceof Herbivore && !herb.hidden) {
      herb.health -= Animal.DESCREASE_HEALTH;

      Animal.checkHealth(herb);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

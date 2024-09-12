'use strict';

class Animal {
  static alive = [];
  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }

  health = 100;
  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
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
  bite(animal) {
    const isHerbivore = animal instanceof Herbivore;

    if (animal.hidden !== true && isHerbivore) {
      animal.health -= 50;
    }
    Animal.removeDeadAnimals();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

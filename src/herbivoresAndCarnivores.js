'use strict';

class Animal {
  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static removeAnimal(animal) {
    const index = this.alive.indexOf(animal);

    this.alive.splice(index, 1);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.addAnimal(this);
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
    const nutritionMode = Object.getPrototypeOf(animal);
    const isHerbivore = nutritionMode === Herbivore.prototype;

    if (!animal.hidden && isHerbivore) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.removeAnimal(animal);
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

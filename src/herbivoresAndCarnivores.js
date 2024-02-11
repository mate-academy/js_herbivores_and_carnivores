'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  static alive = [];

  static addToArray(animal) {
    Animal.alive.push(animal);
  }

  static removeAnimal(animal) {
    const index = Animal.alive.findIndex(one => one === animal);

    if (animal.health > 0) {
      Animal.alive.splice(index, 1, animal);
    } else {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;

    Animal.addToArray(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.addToArray(this);
  }

  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
      Animal.removeAnimal(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

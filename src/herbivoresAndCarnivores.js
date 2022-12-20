'use strict';

class Animal {
  static alive = [];

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.addAnimal(this);
  }
}

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(object) {
    if (object instanceof Herbivore && object.hidden === false) {
      object.health -= 50;
    }

    Animal.alive = Animal.alive.filter(elem => elem.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

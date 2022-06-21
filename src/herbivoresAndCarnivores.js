'use strict';

class Animal {
  static alive = [];

  static removeAnimal(animal) {
    delete Animal.alive[Animal.alive.indexOf(animal)];
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(hebrivore) {
    if (!hebrivore.hidden && hebrivore instanceof Herbivore) {
      hebrivore.health -= 50;

      if (!hebrivore.health) {
        Animal.removeAnimal(hebrivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

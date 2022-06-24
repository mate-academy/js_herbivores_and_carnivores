'use strict';

class Animal {
  static deleteAnimal(animal) {
    delete Animal.alive[Animal.alive.indexOf(animal)];
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(hebrivore) {
    if (!hebrivore.hidden && hebrivore instanceof Herbivore) {
      hebrivore.health -= 50;

      if (!hebrivore.health) {
        Animal.deleteAnimal(hebrivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

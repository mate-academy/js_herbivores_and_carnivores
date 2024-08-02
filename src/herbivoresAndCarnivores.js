'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && !(animal instanceof Carnivore)) {
      animal.health = animal.health - 50;

      if (animal.health <= 0) {
        const index = Animal.alive.indexOf(animal);

        delete Animal.alive[index];
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

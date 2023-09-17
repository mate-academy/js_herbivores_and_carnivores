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
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (!herbivore.hidden && !(herbivore instanceof Carnivore)) {
      herbivore.health -= 50;
    }

    Animal.alive = Animal.alive.filter(animal => {
      return animal.health > 0;
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

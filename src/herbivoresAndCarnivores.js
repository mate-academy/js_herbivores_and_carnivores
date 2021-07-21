'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name)

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name)
  }

  bite(animal) {
    const index = Animal.alive.findIndex((item) => item === animal);

    if (Animal.alive[index].hidden !== true && Animal.alive[index] instanceof Herbivore) {
      Animal.alive[index].health -= 50;
    }

    if (Animal.alive[index].health === 0) {
      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

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
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      const index = Animal.alive.indexOf(animal);
      if (index > -1) {
        Animal.alive.splice(index , 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

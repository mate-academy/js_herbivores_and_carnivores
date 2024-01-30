'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }

  static addAnimals(animal) {
    Animal.alive.push(animal);
  };
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name) {
    super(name);
    Animal.addAnimals(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.addAnimals(this);
  }

  bite(animal) {
    if (animal instanceof Herbivore) {
      const an = Animal.alive.findIndex(obj => obj === animal);

      if (an && animal.hidden === false) {
        Animal.alive[an].health -= 50;
      }

      if (Animal.alive[an].health === 0) {
        Animal.alive.splice(an, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

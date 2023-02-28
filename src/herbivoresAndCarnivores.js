'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  };

  static removeDeadAnimal(animal) {
    Animal.alive = Animal.alive.filter(el => el !== animal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false && animal instanceof Herbivore) {
      animal.health -= 50;
    };

    if (animal.health <= 0) {
      Animal.removeDeadAnimal(animal);
    };
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

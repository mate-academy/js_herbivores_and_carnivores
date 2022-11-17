'use strict';

class Animal {
  static deleteAnimal(animal) {
    this.alive = this.alive.filter(beast => beast !== animal);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  };
}

Animal.alive = [];

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
  bite(victim) {
    if (victim.hidden === false && victim instanceof Herbivore) {
      victim.health -= 50;
    }

    if (victim.health === 0) {
      Animal.deleteAnimal(victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

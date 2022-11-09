'use strict';

class Animal {
  static pushAnimal(animal) {
    Animal.alive.push(animal);
  }

  static deleteAnimal(animal) {
    Animal.alive = Animal.alive.filter(beast => beast !== animal);
  }

  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.pushAnimal(this);
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
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (herb instanceof Herbivore && !herb.hidden) {
      herb.health -= 50;
    }

    if (herb.health === 0) {
      Animal.deleteAnimal(herb);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

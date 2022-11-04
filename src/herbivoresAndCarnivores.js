'use strict';

class Animal {
  static addAnimal(animal) {
    Animal.alive.push(animal);
  }

  static removeAnimal(animal) {
    Animal.alive = Animal.alive.filter(creature => creature !== animal);
  }

  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.addAnimal(this);
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
  bite(prey) {
    if (prey instanceof Herbivore && prey.hidden === false) {
      prey.health -= 50;
    }

    if (prey.health === 0) {
      Animal.removeAnimal(prey);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

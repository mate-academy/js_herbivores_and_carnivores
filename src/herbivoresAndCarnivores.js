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
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;
    }

    if (victim.health >= 0) {
      Animal.removeAnimal(victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

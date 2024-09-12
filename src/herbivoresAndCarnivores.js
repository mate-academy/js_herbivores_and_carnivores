'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.addAnimal(this);
  }

  static addAnimal(animal) {
    Animal.alive.push(animal);
  }

  static removeAnimal() {
    Animal.alive = Animal.alive.filter(being => being.health > 0);
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
      Animal.removeAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

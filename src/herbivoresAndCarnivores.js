'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.addAnimal(this);
  }

  static addAnimal(newAnimal) {
    Animal.alive.push(newAnimal);
  }

  static removeAnimal(deadAnimal) {
    Animal.alive = Animal.alive.filter(animal => animal !== deadAnimal);
  }

  /*
  Eslint does not support either static or regular fields in a class.
  How to fix it?
  Examples:
  - health = 100;
  - static alive = [];
  */
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.removeAnimal(target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

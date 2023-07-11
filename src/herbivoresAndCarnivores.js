'use strict';

class Animal {
  static alive = [];

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static removeDiedAnimal() {
    this.alive = this.alive.filter(animal => animal.health > 0);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.addAnimal(this);
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
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      Animal.removeDiedAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

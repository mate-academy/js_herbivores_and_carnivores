'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.addAnimal(this);
  }

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static removeAnimal(killedAnimal) {
    this.alive = this.alive.filter(animal => animal !== killedAnimal);
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
    if (!victim.hidden && victim instanceof Herbivore) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      Animal.removeAnimal(victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static removeAnimal(animal) {
    this.alive = this.alive.filter(item => item !== animal);
  }
  constructor(name) {
    this.name = name;
    this.health = 100;
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
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
    }

    if (target.health === 0) {
      Animal.removeAnimal(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

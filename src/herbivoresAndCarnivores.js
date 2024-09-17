'use strict';

class Animal {
  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static deleteAnimal(animal) {
    this.alive = this.alive.filter(beast => beast !== animal);
  }

  constructor(name, health = 100) {
    this.health = health;
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
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
    }

    if (target.health === 0) {
      Animal.deleteAnimal(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

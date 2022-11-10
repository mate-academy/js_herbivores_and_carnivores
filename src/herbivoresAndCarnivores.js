'use strict';
class Animal {
  static allAnimals(animal) {
    this.alive.push(animal);
  }

  static deadAnimals(target) {
    Animal.alive = Animal.alive.filter(animal => animal !== target);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.allAnimals(this);
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

    if (target.health <= 0) {
      Animal.deadAnimals(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
